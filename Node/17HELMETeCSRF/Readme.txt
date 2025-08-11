npm i helmet
Helmet é um middleware para Express que ajuda a 
proteger sua aplicação contra vulnerabilidades comuns da web
Ele faz isso configurando automaticamente 
cabeçalhos HTTP de segurança

npm i csurf
CSRF (Cross-Site Request Forgery) é um tipo de ataque 
onde um site malicioso faz o usuário executar ações 
indesejadas em outro site onde ele está autenticado.

Imagine: você está logado no seu banco, 
e um site malicioso tenta fazer uma transferência 
usando sua sessão ativa. 😱

Para evitar isso, usamos tokens CSRF:
O servidor gera um token único e envia ao cliente.
O cliente deve enviar esse token de volta em cada 
requisição sensível (como POST).
Se o token estiver ausente ou incorreto, 
a requisição é bloqueada.