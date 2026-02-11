<!doctype html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MegaByte</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="css/StyleGlobal.css">
</head>

<body>

    <div id="Container">

        <nav class="navbar navbar-dark  fixed-top navbar">

            <div class="container-fluid">

                <img height="100" src="images/logo/MegaByte.png" alt="">

                <a class="navbar-brand" href="#">MegaByte</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end  offcanvas" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 style="color: #ffcc00;" class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex mt-3" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>

        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="images/carousel/carousel-PecasPc.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="images/carousel/carousel-Ps5eXbox.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="images/carousel/carousel-JogoPlataformas.png" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div class="clearfix">
            <div class="bottomProducts">

                <img src="images/home/PcGamer-TelaInicial.png" class="col-md-6 float-md-end mb-3 ms-md-3 productHome" alt="...">

                <h1 class="titlesHome">PCs Gamers</h1>

                <p class="descriptionHome">
                    O PC Gamer é muito mais do que um computador: é liberdade, desempenho e imersão total. É a escolha de quem quer jogar sem limites, com fluidez, qualidade gráfica e resposta rápida em qualquer situação. Na MegaByte, o PC gamer é pensado para entregar a melhor experiência possível, independentemente do seu estilo de jogo.

                    Seja para jogos competitivos, onde cada milésimo de segundo faz diferença, ou para games de mundo aberto, cheios de detalhes e gráficos impressionantes, o PC gamer oferece uma experiência superior. Mais controle, mais personalização e mais conforto para longas horas de gameplay. Aqui, você joga do seu jeito, no seu ritmo e no seu nível.

                    O PC gamer também é evolução. Diferente de outras plataformas, ele cresce junto com você. Hoje é diversão, amanhã pode ser criação de conteúdo, lives, estudos ou trabalho. Tudo em um único lugar, com desempenho consistente e estabilidade para qualquer desafio.

                    Na MegaByte, acreditamos que cada jogador é único. Por isso, oferecemos PCs gamers para todos os perfis: do jogador casual ao gamer mais exigente. Nosso objetivo é garantir que você tenha uma máquina pronta para rodar seus jogos com qualidade, fluidez e confiança, sem dor de cabeça.

                    Mais do que jogar, o PC gamer proporciona imersão total. Gráficos mais realistas, respostas mais rápidas e uma experiência que coloca você dentro do jogo. É sentir cada detalhe, cada movimento e cada vitória com intensidade máxima.
                </p>


                <div class="buttonDiv">
                    <button class="Button">Veja Ja</button>

                </div>

            </div>




        </div>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</body>

</html>