import React, { Component } from 'react'
import Oleo from "img/oleo.png"
import { HomeContent,Card } from 'Components'
import Pneu from "img/pneu.png"
import Madeira from "img/madeira.png"
import Tijolo from "img/tijolo.png"
import Bateria from "img/bateria.png"
import Eletronico from "img/eletronico.png"
import Sofa from "img/sofa.png"
import Eletrodomestico from "img/eletrodomestico.png"
import "./style.css"
import Grid from '@material-ui/core/Grid'

class Home extends Component {
  render() {
    return (
      <>
        <HomeContent />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
              <Card img={Oleo} title="Óleo" text="O descarte errado do óleo pode causar problema ambientais tanto no solo quanto na água, no solo o óleo pode chegar ao lençol freático e poluir, com apenas um litro, vinte mil litros de água, também pode impermeabilizar o solo e alterar o pH do mesmo, na água ele cria uma camada sob a água impedindo a luz e o oxigênio de entrar na água, causando a falta de ambas as substâncias e pode alterar a composição química da água, assim, causando a morte de alguns seres vivos."/>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
              <Card img={Pneu} title="Pneu" text="Descartar os pneus de forma incorreta pode acarretar em problemas sérios de saúde, pois eles são fontes de diversas doenças como a dengue e a febre amarela, para descartá-los corretamente é necessário deixar em pontos de coleta específicos, pois tal processo de reciclagem é complexo."/>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
              <Card img={Madeira} title="Madeira" text=" O problema ambiental da madeira é semelhante ao do entulho, é descartado em locais inapropriados, como ruas, terrenos baldios, rios, ambientes públicos."/>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
              <Card img={Tijolo} title="Entulhos" text="O entulho que muitas vezes é proveniente da construção civil é um problema sério no Brasil, ele poluí, na maioria das vezes, o solo, obstrui a passagem pluvial e fluvial nos centros urbanos e também pode aumentar a chance de outros desastres naturais. O problema dos entulhos não é apenas ambiental, é também econômico, com todo o entulho produzido em ano daria para construir sete mil prédios de dez andares."/>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
              <Card img={Eletronico} title="Eletrónicos" text="O lixo eletrônico é muitas vezes descartado de forma errada, esta ação pode causar problemas ambientais relacionados à contaminação por metais pesados, já que muitos aparelhos eletrônicos utilizam eles. O problema do lixo eletrônico é que os aparelhos eletrônicos têm um tempo de vida muito curto, isto gera uma quantidade considerável de “e-lixo”."/>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
              <Card img={Bateria} title="Pilhas e Baterias" text="O principal problema do descarte impróprio das pilhas e baterias é o ambiental e de saúde, quando uma pilha é descartada de forma errônea ela pode reagir à alguma substância e causar a contaminação do solo e do lençol freático, isto ocorre por causa da composição de uma pilha e bateria, ela é constituída por substâncias prejudiciais à saúde humana, como metais pesados."/>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
              <Card img={Sofa} title="Volumosos" text="Embora se desfazer de um sofá ou uma geladeira possa parecer um problema, existem diferentes soluções para a questão: para itens em bom estado, a doação é o melhor caminho e, quase sempre, as prefeituras podem informar sobre entidades locais que recebem (e precisam de) doações ."/>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
              <Card img={Eletrodomestico} title="Eletrodomésticos" text="O descarte incorreto dos eletrodomésticos pode resultar na poluição ambiental, pois alguns componentes usados nestes materiais trazem riscos à saúde, para descartá-los corretamente, é necessário levá-los aos pontos de coleta que reciclam este material."/>
          </Grid>

        </Grid>
      </>
    )

  }
}

export default Home
