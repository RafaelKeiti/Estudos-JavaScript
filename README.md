Passo a passo 1
-------------------------------------------------------------------------------------------------------
Caso a pasta não esteja iniciada, devemos utilizar o comando (git init)
-
-
Logo após, com a pasta iniciada, podemos utilizar o (git clone url do repositório) ou 
(git remote add origin url)
-
-
Depois da pasta estar linkada ao GITHUB, só basta criar os arquivos no PC e quando estiverem prontos
utilizaremos o (git add nome do arquivo) para adicionar e o (git commit -m 'ESPECIFICACAO SOBRE O ARQUIVO'). OBS: No commit devemos utilizar os prefixos do COMMIT SEMANTICO para padronização.
-
-
Vamos utilizar o (git push) para os arquivos serem disponibilizados no GITHUB.

-------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------

Passo a passo 2
-------------------------------------------------------------------------------------------------------
Para a organização do projeto devemos separar o mesmo em 'Branch', para isso, criaremos outra utilizando o comando (checkout -b Nome_Da_Branch_Usando_Esse_Padrao) e depois para que o GITHUB consiga reconhecer a mesma utilizamos (git push --set-upstream origin NOME DA BRANCH)
-
-
Se você utilizar o comando (git branch) poderá ver as separações do projeto, podemos acessar utilizando (git checkout NOME DA BRANCH).
-
-
Quando e terminado o projeto e checado por todos participantes, os mesmo realizam o merge, processo que une as separações do projeto e o transforma em apenas UM. (Realizado dentro do GITHUB)
-
-
Depois de toda finalização, devemos atualizar o merge realizado no GITHUB em nosso PC, utilizaremos o comando (git pull) para puxar todos arquivos.
-
-
Tendo total certeza que esta tudo certinho, podemos deletar a branch nova e deixar apenas a BRANCH MAE, (git branch -d NOME DA BRANCH).

-------------------------------------------------------------------------------------------------------