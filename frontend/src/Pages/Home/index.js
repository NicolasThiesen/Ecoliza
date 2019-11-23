import React, { Component } from 'react';
import Oleo from "../../img/oleo.png"
import { Header, HomeContent,Card } from 'Components';
import Pneu from "img/pneu.png"
import "./style.css"
import Grid from '@material-ui/core/Grid';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <HomeContent />
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
              <Card img={Oleo} title="Óleo" text="O descarte errado do óleo pode causar problema ambientais tanto no solo quanto na água, no solo o óleo pode chegar ao lençol freático e poluir, com apenas um litro, vinte mil litros de água, também pode impermeabilizar o solo e alterar o pH do mesmo, na água ele cria uma camada sob a água impedindo a luz e o oxigênio de entrar na água, causando a falta de ambas as substâncias e pode alterar a composição química da água, assim, causando a morte de alguns seres vivos."/>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card img={Pneu} title="Pneu" text="Descartar os pneus de forma incorreta pode acarretar em problemas sérios de saúde, pois eles são fontes de diversas doenças como a dengue e a febre amarela, para descartá-los corretamente é necessário deixar em pontos de coleta específicos, pois tal processo de reciclagem é complexo."/>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card img={Pneu} title="Pneu" text="Descartar os pneus de forma incorreta pode acarretar em problemas sérios de saúde, pois eles são fontes de diversas doenças como a dengue e a febre amarela, para descartá-los corretamente é necessário deixar em pontos de coleta específicos, pois tal processo de reciclagem é complexo."/>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card img={Pneu} title="Pneu" text="Descartar os pneus de forma incorreta pode acarretar em problemas sérios de saúde, pois eles são fontes de diversas doenças como a dengue e a febre amarela, para descartá-los corretamente é necessário deixar em pontos de coleta específicos, pois tal processo de reciclagem é complexo."/>
          </Grid>
        </Grid>
      </>
    )

  }
}

export default Home
