from fastapi import FastAPI, HTTPException, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uvicorn
import os
from dotenv import load_dotenv

# Carrega variáveis de ambiente
load_dotenv()

app = FastAPI(
    title="Help Desk Interno para PMEs",
    description="API para gestão de chamados de suporte interno",
    version="1.0.0"
)

# Configuração CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"] if os.getenv("ENV") == "development" else ["https://seusite.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelos Pydantic
class Ticket(BaseModel):
    id: Optional[int] = None
    titulo: str
    descricao: str
    categoria: str  # Ex: Hardware, Software, Rede
    prioridade: str  # Baixa, Média, Alta
    status: str = "Aberto"
    usuario_id: int
    tecnico_id: Optional[int] = None

class User(BaseModel):
    id: Optional[int] = None
    nome: str
    email: str
    empresa: str
    tipo: str  # Usuario, Tecnico, Admin

# Banco de Dados Fake (em memória)
tickets_db = []
users_db = []
next_ticket_id = 1
next_user_id = 1

# Endpoints de Usuários
@app.post("/users/", response_model=User)
async def criar_usuario(user: User):
    global next_user_id
    user.id = next_user_id
    next_user_id += 1
    users_db.append(user)
    return user

@app.get("/users/", response_model=List[User])
async def listar_usuarios():
    return users_db

# Endpoints de Tickets
@app.post("/tickets/", response_model=Ticket)
async def abrir_ticket(ticket: Ticket):
    global next_ticket_id
    ticket.id = next_ticket_id
    next_ticket_id += 1
    tickets_db.append(ticket)
    return ticket

@app.get("/tickets/", response_model=List[Ticket])
async def listar_tickets():
    return tickets_db

@app.put("/tickets/{ticket_id}")
async def atualizar_ticket(ticket_id: int, ticket_data: dict):
    for i, t in enumerate(tickets_db):
        if t.id == ticket_id:
            # Atualiza apenas os campos enviados
            for key, value in ticket_data.items():
                if hasattr(t, key):
                    setattr(t, key, value)
            return {"message": "Ticket atualizado com sucesso"}
    raise HTTPException(status_code=404, detail="Ticket não encontrado")

@app.delete("/tickets/{ticket_id}")
async def excluir_ticket(ticket_id: int):
    for i, t in enumerate(tickets_db):
        if t.id == ticket_id:
            tickets_db.pop(i)
            return {"message": "Ticket excluído"}
    raise HTTPException(status_code=404, detail="Ticket não encontrado")

# Endpoint de Checkout (Mercado Pago)
@app.post("/checkout/mp")
async def criar_checkout_mp(request: Request):
    # Simula criação de preferência no Mercado Pago
    # Em produção, use o SDK oficial do Mercado Pago
    data = await request.json()
    
    # Validação simples
    if not data.get("valor") or not data.get("descricao"):
        raise HTTPException(status_code=400, detail="Dados inválidos para checkout")
    
    # Aqui seria feita a integração real com MP
    # Por enquanto, retorna uma URL de teste (já fornecida)
    return {
        "checkout_url": "https://test.com/verification-pay",
        "valor": data["valor"],
        "descricao": data["descricao"]
    }

# Health Check
@app.get("/health")
async def health_check():
    return {"status": "ok", "service": "help-desk-pme"}

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=(os.getenv("ENV") == "development"))
