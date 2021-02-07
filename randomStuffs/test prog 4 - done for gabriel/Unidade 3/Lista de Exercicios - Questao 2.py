agenda = []
dados = {}
resp='SIM'
while resp == 'SIM':
	dados['nome']=input('Nome:')
	dados['telefone']=input('Telefone: ')
	agenda.append(dados.copy())
	resp=input('Deseja cadastrar mais números na agenda?) - [SIM/NÃO]')
	resp = resp.upper()
	print(agenda)
