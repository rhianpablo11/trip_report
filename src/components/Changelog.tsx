import { useEffect } from "react";
import { saveVersion } from "../functions/utils";
import type { HomeProps } from "../interfaces/interfaces";
import Button from "./ui/Button";


function Changelog(props: HomeProps) {
    const {onClickButton} = props

    const onClickFather = (buttonClicked:string) => {
        onClickButton(buttonClicked)
        
    }

    useEffect(()=>{
        saveVersion()
    }, [])

    return (
        // O container de fundo que centraliza o modal
        <div className="w-full h-full flex items-center justify-center px-6 py-20 overflow-hidden">
            <div className="w-full h-full bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-lg flex flex-col">
                <div className="w-full p-3 border-b flex justify-between border-gray-200">
                    <h1 className="text-xl font-medium">Atualizações da Versão</h1>
                    <div className="w-10">
                        <Button isActive={true} onClickChildren={onClickFather} buttonShow="close" />
                    </div>
                    
                </div>
                <div className="overflow-y-auto mt-2 px-3 space-y-1">
                    {updatesData.map((update, index) => (
                        <article key={index} className="space-y-0">
                            {/* H2 para os subtítulos (versões) */}
                            <h2 className="text-lg font-normal">
                                Versão: {update.version}
                            </h2>
                            {/* 4. USO DE LISTAS (UL, LI) PARA MELHOR ESTRUTURA E ACESSIBILIDADE */}
                            {update.notes.map((note, noteIndex) => (
                                <div key={noteIndex} className="text-sm font-light">
                                    <p className="pl-3">{note.title}</p>
                                    {note.details && note.details.length > 0 && (
                                        <ul className="list-disc pl-10 mt-1 space-y-0 font-extralight">
                                            {note.details.map((detail, detailIndex) => (
                                                <li key={detailIndex}>{detail}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                            {/* Renderiza o <hr /> apenas se não for o último item */}
                            {index < updatesData.length - 1 && <hr className="my-4 border-t border-gray-200" />}
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Changelog;



const updatesData = [
    {
        version: '5.2.3',
        notes: [
            {
                title: 'Correção no calculo dos pontos',
                details: ['A lista considerada agora, é a lista já editada de Ida, e não a lista bruta sem nenhum tratamento']
            },
            {
                title: 'Retirado a apresentação do "Total pós Correios"',
                details: ['Esse somatorio apresentado pode ficar confuso a depender da rota e como ela pode ser feita. A depender alguns pontos podem ser antes dos correios e outros após e vice-versa']
            }
        ]
    },
    {
        version: '5.2.2',
        notes: [
            {
                title: 'Melhorias na edição da lista e adição de pontos',
                details: ['Adicionados o reconhecimento dos pontos "Cidade Jardim", "Posto Avenida" e "Bandiaçu"',
                          'Melhoria para o reconhecimento quando se é utilizado espaços para quebrar uma linha, em vez do uso do enter'
                ]
            },
            {
                title: 'Retirado a apresentação do "Total pós Correios"',
                details: ['Esse somatorio apresentado pode ficar confuso a depender da rota e como ela pode ser feita. A depender alguns pontos podem ser antes dos correios e outros após e vice-versa']
            }
        ]
    },
    {
        version: '5.2.1',
        notes: [
            {
                title: 'Adição de 2 faculdades ao vocabulario',
                details: ['Adicionadas as faculdades "PRO SABER" e "SENAI"']
            }
        ]
    },
    {
        version: '5.2.0',
        notes: [
            {
                title: 'Adição da barra lateral',
                details: ['Ao clicar nas reticências/3 pontos, localizados no canto superior esquerdo, é aberto a "SideBar" em que novas funções são encontradas.',
                          'É possível verificar também a versão do aplicativo, e informações do desenvolvedor'
                ]
            },
            {
                title: 'Adição da funcionalidade de iniciar a lista',
                details: ['Adicionada opção de enviar a lista, do proximo dia, já formatada.',
                          'Adicionada a opção de enviar a lista, do proximo dia, já com um nome de exemplo pré-definido.']
            },
            {
                title: 'Adição a funcionalidade de reportar um erro',
                details: ['Ao verificar um erro no aplicativo é possível informar esse erro ao desenvolvedor.',
                          'Ao informar o erro, é registrado o horário em que se verificou esse erro, a lista em questão, caso o erro esteja nela, e o espaço para informar o erro.'
                ]
            }
        ]
    },
    {
        version: '5.1.1',
        notes: [
            {
                title: 'Alteração na ordem dos icones da NavBar',
                details: ['Icone de "Home" foi trocado de local dentro da barra de navegação(NavBar)']
            }
        ]
    },
    {
        version: '5.1.0',
        notes: [
            {
                title: 'Adição da funcionalidade do app off-line e permissão para instalação',
                details: ['É possível agora realizar a instalação do app no dispositivo.',
                          'O app continua funcionando mesmo sem conexão com a internet.'
                ]
            }
        ]
    },
    {
        version: '5.0.0',
        notes: [
            {
                title: 'Mudança visual completa e alterações de performance.',
                details: ['Remodelagem em todo o sistema, alterando o layout e facilitando alterações e adições de novas funcionalidades futuras.',
                          'Aprimoramento nos calculos e edições das listas.',
                          'Vale ressaltar: algumas funções (inicializar a lista do dia seguinte, alteração do tema do app) ainda não foram reimplementadas. As principais funções de uso diario seguem funcionais.'
                ]
            }
        ]
    },
    {
        version: '4.2.1',
        notes: [
            {
                title: 'Aprimoramento na funcionalidade: pessoas por ponto.',
                details: ['Melhoria no vocabulário aceito.']
            }
        ]
    },
    {
        version: '4.2.0',
        notes: [
            {
                title: 'Funcionalidade em fase de TESTE - pessoas por ponto.',
                details: [
                    'Ao requisitar a lista de ida, é apresentado a quantidade de pessoas em cada um dos pontos.',
                    'Apresentação do total de pessoas após o ponto dos correios.',
                    'Funcionalidade em TESTE - isso não deve impactar no funcionamento das outras funções do site.'
                ]
            }
        ]
    },
    {
        version: '4.1.0',
        notes: [
            {
                title: 'Correção no envio da lista - gerar uma nova.',
                details: ['Ao gerar uma nova lista para o dia seguinte, a lista de faculdades presentes foi atualizada.']
            }
        ]
    },
    {
        version: '4.0.7', // Mantido do log de commit
        notes: [
            { title: 'Correção dos envios da lista.' }
        ]
    },
    {
        version: '4.0.6',
        notes: [
            {
                title: 'Aumento do reconhecimento de vocabulário.',
                details: ['Uso do "vinda" reconhecido como "volta".', 'Uso do "vespertina", "vesper" e "vesp" aceitos nessa versão.']
            },
            {
                title: 'Atualização na funcionalidade de enviar a lista.',
                details: ['Faculdades atualizadas para o semestre 25.1.']
            },
            {
                title: 'Correção no tema branco na página da lista editada.',
                details: ['Alterado para a cor preta ficar na lista, em vez do tom cinza.']
            }
        ]
    },
    {
        version: '4.0.5',
        notes: [
            {
                title: 'Correção da edição da lista que removia a letra inicial da pessoa.',
                details: [
                    'Erro recorrente ao requisitar a re-edição de uma lista já editada.',
                    'Atualização de caráter emergencial. Erros são passíveis de acontecer.'
                ]
            },
            {
                title: 'Atualização prévia do vocabulário.',
                details: ['Melhoria do vocabulário utilizado para reconhecer quando o usuário deseja ir, voltar ou voltar no turno vespertino.']
            }
        ]
    },
    {
        version: '4.0.4',
        notes: [
            { title: 'Correção de estilo para o modo claro.' }
        ]
    },
    {
        version: '4.0.3',
        notes: [
            {
                title: 'Correção do nome da faculdade em minúsculo após correção de quebra de linha.',
                details: ['O erro da quebra de linha original foi corrigido na versão 4.0.2.']
            },
            {
                title: 'Melhoria na apresentação do texto de atualizações.',
                details: ['Melhor visualização e correção no comprimento para telas mais curtas.']
            },
            {
                title: 'Apresentação de quantidade única de "ida" na tela da lista editada.',
                details: [
                    'O valor de "ida" agora corresponde apenas àquele turno específico.',
                    'Função em fase experimental.'
                ]
            }
        ]
    },
    {
        version: '4.0.2',
        notes: [
            {
                title: 'Correção do bug onde o nome da faculdade ficava na mesma linha que o nome do aluno.',
                details: ['Situação acontecia ao usar múltiplos espaços em vez de "Enter" para quebrar a linha.']
            },
            {
                title: 'Apresentação do "Changelog" (esta tela).',
                details: ['A caixa de atualizações só aparece uma vez a cada nova versão.']
            },
            { title: 'Permissão para rolar o texto inserido na caixa de texto da tela principal.' },
            { title: 'Para fechar, basta apertar o botão abaixo.' }
        ]
    },
    {
        version: '4.0.1',
        notes: [
            { title: 'Correção no tamanho da fonte.' }
        ]
    },
    {
        version: '4.0',
        notes: [
            { 
                title: 'Grande atualização na edição da lista e apresentação de "Change Log".',
                details: [
                    'Correção do bug onde o nome da faculdade ficava na mesma linha que o nome do aluno.',
                    'Apresentação da lista de alterações (Changelog) ao atualizar a versão.',
                    'Adicionado botão para fechar o modal de atualizações.'
                ]
            }
        ]
    },
    {
        version: '3.9.1',
        notes: [
            { title: 'Correção no envio da lista editada pelo WhatsApp.' }
        ]
    },
    {
        version: '3.9',
        notes: [
            { title: 'Implementação do botão de envio para o WhatsApp na tela da lista editada.' }
        ]
    },
    {
        version: '3.8',
        notes: [
            { 
                title: 'Melhoria na exibição da lista de volta.',
                details: ['Apenas faculdades que contêm alunos para voltar aparecem na lista, evitando nomes de faculdades vazios.']
            }
        ]
    },
    {
        version: '3.7',
        notes: [
            { 
                title: 'Melhoria no reconhecimento de nomes na edição da lista.',
                details: ['Corrigido o erro onde nomes de pessoas (ex: "Estefane") ou palavras (ex: "CarvNAISilva") eram reconhecidos incorretamente como faculdades.']
            }
        ]
    },
    {
        version: '3.6',
        notes: [
            { title: 'Resolução do problema de "faculdade fantasma" na edição da lista.'}
        ]
    },
    {
        version: '3.5',
        notes: [
            {
                title: 'Adição da funcionalidade de visualizar e enviar a lista de "ida".',
                details: ['Permite ver a lista contendo apenas as pessoas que vão e enviá-la pelo WhatsApp.']
            }
        ]
    },
    {
        version: '3.4',
        notes: [
            {
                title: 'Alteração de ícone e melhorias de compatibilidade.',
                details: ['Melhor compatibilidade com dispositivos Apple.', 'Alteração de teste do ícone do app.', 'Adicionadas funções que estavam faltantes.']
            }
        ]
    },
    {
        version: '3.3',
        notes: [
            { 
                title: 'Reorganização do código e implementação de tema dinâmico.',
                details: ['O tema do site (claro/escuro) agora se adapta ao tema do dispositivo do usuário.', 'Código reorganizado para facilitar a manutenção.']
            }
        ]
    },
    {
        version: '3.2',
        notes: [
            { title: 'Versão beta com teste de adequação de tema do site de acordo com o dispositivo.' }
        ]
    },
    {
        version: '3.1',
        notes: [
            { title: 'Atualização da versão beta para oficial e correção de bugs.' }
        ]
    },
    {
        version: '3.0',
        notes: [
            { title: 'Atualização do AppCache e correção de strings na versão beta.' }
        ]
    },
    {
        version: '2.9',
        notes: [
            { 
                title: 'Organizações e melhorias na versão beta.',
                details: [
                    'Organização na lógica do script.',
                    'Correção no layout dos botões.',
                    'Implementação da página da lista editada.',
                    'Permissão de ida e volta para a página beta.'
                ]
            }
        ]
    },
    {
        version: '2.8',
        notes: [
            { title: 'Mudança de layout para teste na versão beta.' }
        ]
    },
    {
        version: '2.7',
        notes: [
            { title: 'Aprimoramento da versão beta para torná-la mais funcional.' }
        ]
    },
    {
        version: '2.5',
        notes: [
            { title: 'Início da implementação da pré-visualização da lista editada.' },
            { title: 'Mudanças visuais para teste.' }
        ]
    },
    {
        version: '2.4',
        notes: [
            { title: 'Adição de nova função e correção de erro.' }
        ]
    },
    {
        version: '2.3',
        notes: [
            { title: 'Pequenas mudanças e testes.' }
        ]
    },
    {
        version: '2.2',
        notes: [
            { title: 'Melhoria no visual: removido scroll lateral desnecessário.' }
        ]
    },
    {
        version: '2.1',
        notes: [
            { title: 'Atualização visual em preparação para novas funcionalidades.' }
        ]
    },
    {
        version: '2.0',
        notes: [
            { title: 'Teste de Fallback para o cache.' }
        ]
    },
    {
        version: '1.9',
        notes: [
            { title: 'Organização da string de saída e complemento de funcionalidades.' },
        ]
    },
    {
        version: '1.8',
        notes: [
            { title: 'Adicionada função de enviar a lista gerada.' }
        ]
    },
    {
        version: '1.7',
        notes: [
            { title: 'Aprimoramento no funcionamento da edição de lista.',
              details: [
                  'Adicionada função para obter somente valores de "ida".',
                  'Mais verificações de entrada para impedir erros de digitação.'
              ]
            }
        ]
    },
    {
        version: '1.6',
        notes: [
            { title: 'Correção de bug.' }
        ]
    },
    {
        version: '1.5',
        notes: [
            { 
                title: 'Atualização na edição da lista.',
                details: [
                    'Nomes na lista editada mantêm as letras maiúsculas/minúsculas originais.',
                    'Adicionado negrito para o nome das faculdades para melhor visualização.'
                ]
            }
        ]
    },
    {
        version: '1.4',
        notes: [
            { title: 'Botões da lista editada agora enviam para o WhatsApp e copiam para a área de transferência.' }
        ]
    },
    {
        version: '1.3',
        notes: [
            { title: 'Melhora no sistema de edição de lista e validação de mais faculdades.' }
        ]
    },
    {
        version: '1.2',
        notes: [
            { title: 'Adicionado alerta "Texto copiado!" ao usar os botões de cópia.' }
        ]
    },
    {
        version: '1.1',
        notes: [
            { 
                title: 'Implementação inicial do sistema de edição de lista.',
                details: ['Sistema para separação da lista entre os que voltam no turno matutino e vespertino.']
            }
        ]
    },
    {
        version: '1.0',
        notes: [
            { title: 'Lançamento da v1.0 com mudança de cor nas caixas principais.' }
        ]
    },
    {
        version: '0.9',
        notes: [
            { title: 'Correção do footer para fixá-lo ao final da página.' }
        ]
    },
    {
        version: '0.8',
        notes: [
            { title: 'Corrigido erro no link do WhatsApp.' }
        ]
    },
    {
        version: '0.7',
        notes: [
            { title: 'Removido temporariamente o arquivo de cache.' }
        ]
    },
    {
        version: '0.6',
        notes: [
            { title: 'Correção de bug no esquema do footer e atualização do cache.' }
        ]
    },
    {
        version: '0.3',
        notes: [
            { title: 'Grande atualização visual e funcional.', details: ['Adicionado Bootstrap, alterações em HTML/CSS/JS.', 'Corrigido problema de não atualizar valores ao compartilhar.'] },
            { title: 'Adição do cache manifest para funcionamento offline.'}
        ]
    },
    {
        version: '0.2',
        notes: [
            { title: 'Alterações básicas no visual inicial.' }
        ]
    },
    {
        version: '0.1',
        notes: [
            { title: 'Adicionado código base com a função principal.' }
        ]
    },
    {
        version: 'Initial commit',
        notes: [
            { title: 'Início do projeto.' }
        ]
    }
];