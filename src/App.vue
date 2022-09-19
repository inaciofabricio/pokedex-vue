<template>
  <div id="app">

    <h1>Pokedex - VueJS</h1>

    <div id="pokedex">

        <div id="left-panel">

            <div class="left-top-container">
                <svg height="100" width="225" class="left-svg">
                    <polyline points="0,75 70,75 90,38 224,38" style="fill: none; stroke: black; stroke-width: 3"/>
                </svg>
                <div class="lights-container">
                    <div class="big-light-boarder">
                        <div class="big-light blue">
                            <div class="big-dot light-blue"></div>
                        </div>
                    </div>
                    <div class="small-lights-container">
                        <div class="small-light red">
                            <div class="dot light-red"></div>
                        </div>
                        <div class="small-light yellow">
                            <div class="dot light-yellow"></div>
                        </div>
                        <div class="small-light green">
                            <div class="dot light-green"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="screen-container">
                <div class="screen">
                <div class="top-screen-lights">
                    <div class="mini-light red"></div>
                    <div class="mini-light red"></div>
                </div>
                <div id="main-screen">
                    <img v-if="pokemon.img != ''" class="img" :src="pokemon.img">
                </div>
                <div class="bottom-screen-lights">
                    <div class="small-light red">
                        <div class="dot light-red"></div>
                    </div>
                    <div class="burger">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="buttons-container">
                <div class="upper-buttons-container">
                    <div class="big-button"></div>
                    <div class="long-buttons-container">
                        <div class="long-button red"></div>
                        <div class="long-button light-blue"></div>
                    </div>
                </div>
                <div class="nav-buttons-container">
                    <div class="dots-container">
                        <div>.</div>
                        <div>.</div>
                    </div>
                    <div class="green-screen">
                        <span id="name-screen">{{ pokemon.nome }}</span>
                    </div>
                    <div class="right-nav-container">
                        <div class="nav-button">
                            <div class="nav-center-circle"></div>
                            <div class="nav-button-vertical"></div>
                            <div class="nav-button-horizontal">
                                <div class="border-top"></div>
                                <div class="border-bottom"></div>
                                <div class="cruz">
                                    <span @click="anterior()">.</span>
                                    <span @click="proximo()">.</span>
                                </div>
                            </div>
                        </div>
                        <div class="bottom-right-nav-container">
                            <div class="small-light red">
                                <div class="dot light-red"></div>
                            </div>
                            <div class="dots-container">
                                <div class="black-dot">.</div>
                                <div class="black-dot">.</div>
                                <div class="black-dot">.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="right-panel">

            <div class="empty-container">
                <svg height="100%" width="100%">
                <polyline points="0,0 0,40 138,40 158,75 250,75 250,0 0,0" style="fill: #f2f2f2; stroke: none; stroke-width: 3"/>
                <polyline points="0,40 138,40 158,75 250,75" style="fill: none; stroke: black; stroke-width: 3" />
                </svg>
            </div>

            <div class="top-screen-container">
                <div id="about-screen" class="right-panel-screen">
                    <div class="panel-screen">
                        <div v-show="painel == 1">
                            <div>Básico:</div>
                            <div>
                                <div class="tab-paragrafo">Altura: {{ pokemon.altura }}</div>
                                <div class="tab-paragrafo">Peso: {{ pokemon.peso }}</div>
                            </div>
                        </div>
                        <div v-show="painel == 2">
                            <div>Status:</div>
                            <div v-if="pokemon.statusBasicos.length > 0">
                                <div v-for="item of pokemon.statusBasicos" :key="item.nome">
                                    <div class="tab-paragrafo">
                                        <span>{{ item.nome }}: {{ item.status }}</span>
                                    </div>
                                </div>
                            </div>
                            <div v-if="pokemon.statusBasicos.length == 0">
                                <div class="tab-paragrafo">...</div>
                            </div>
                        </div>
                        <div v-show="painel == 3">
                            <div>Jogos:</div>
                            <div v-if="pokemon.jogos.length > 0">
                                <div v-for="item in pokemon.jogos" :key="item.id">
                                    <div class="tab-paragrafo">
                                        <span>{{ item.nome }}</span>
                                    </div>
                                </div>
                            </div>
                             <div v-if="pokemon.jogos.length == 0">
                                <div class="tab-paragrafo">...</div>
                            </div>
                        </div>
                        <div v-show="painel == 4">
                            <div>Movimentos:</div>
                            <div v-if="pokemon.movimentos.length > 0">
                                <div v-for="item in pokemon.movimentos" :key="item.i">
                                    <div class="tab-paragrafo">
                                        <span>{{ item.nome }}</span>
                                    </div>
                                </div>
                            </div>
                            <div v-if="pokemon.movimentos.length == 0">
                                <div class="tab-paragrafo">...</div>
                            </div>
                        </div>
                        <div v-show="painel == 5">
                            <div>Evoluções:</div>
                            <div v-if="pokemon.evolucoes.length > 0">
                                <div v-for="item of pokemon.evolucoes" :key="item.id">
                                    <div class="tab-paragrafo">
                                        <span>{{ item.nome }}</span>
                                    </div>
                                </div>
                            </div>
                            <div v-if="pokemon.evolucoes.length == 0">
                                <div class="tab-paragrafo">...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="square-buttons-container">
                <div class="blue-squares-container">
                    <div v-bind:class="painel == 1 ? 'blue-square fundo-branco' : 'blue-square fundo-azul'" @click="principal()">
                        <i class="fa fa-simplybuilt" aria-hidden="true"></i>
                    </div>
                    <div v-bind:class="painel == 2 ? 'blue-square fundo-branco' : 'blue-square fundo-azul'" class="blue-square" @click="statusBasico()">
                        <i class="fa fa-bar-chart" aria-hidden="true"></i>
                    </div>
                    <div v-bind:class="painel == 3 ? 'blue-square fundo-branco' : 'blue-square fundo-azul'" class="blue-square" @click="jogos()">
                        <i class="fa fa-gamepad" aria-hidden="true"></i>
                    </div>
                    <div v-bind:class="painel == 4 ? 'blue-square fundo-branco' : 'blue-square fundo-azul'" class="blue-square" @click="movimentos()">
                        <i class="fa fa-superpowers" aria-hidden="true"></i>
                    </div>
                    <div v-bind:class="painel == 5 ? 'blue-square fundo-branco' : 'blue-square fundo-azul'" class="blue-square" @click="evolucao()">
                        <i class="fa fa-level-up" aria-hidden="true"></i>
                    </div>
                    <div class="blue-square"></div>
                    <div class="blue-square"></div>
                    <div class="blue-square"></div>
                    <div class="blue-square"></div>
                    <div class="blue-square"></div>
                </div>
            </div>

            <div class="center-buttons-container">
                <div class="center-left-container">
                <div class="small-reds-container">
                    <div class="small-light red">
                    <div class="dot light-red"></div>
                    </div>
                    <div class="small-light red">
                    <div class="dot light-red"></div>
                    </div>
                </div>
                <div class="white-squares-container">
                    <div class="white-square"></div>
                    <div class="white-square"></div>
                </div>
                </div>
                <div class="center-right-container">
                <div class="thin-buttons-container">
                    <div class="thin-button"></div>
                    <div class="thin-button"></div>
                </div>
                <div class="yellow-button yellow">
                    <div class="big-dot light-yellow"></div>
                </div>
                </div>
            </div>

            <div class="bottom-screens-container">
                <div id="type-screen" class="right-panel-screen">{{ pokemon.tipo }}</div>
                <div id="id-screen" class="right-panel-screen centralizado">#{{ pokemon.id }}</div>
            </div>
        </div>

    </div>

  </div>
</template>

<script>

import Pokemon from '../src/domain/pokemon/Pokemon';
import PokemonService from '../src/domain/pokemon/PokemonService';
import { convertePrimeiraLetraMaiuscula, limpaStringVazia } from "../src/domain/util";

export default {
  name: 'app',
  data () {
    return {
      pokemon: new Pokemon(),
      painel: 1
    }
  },
  created() {
    this.service = new PokemonService(this.$resource);
    this.getPokemon(1);

  },
  methods: {

    getPokemon(id) {

      this.pokemon.limpeza();

      this.service
        .getPokemon(id)
        .then(
          res => {

            this.pokemon.serializador(id, res);
            this.getSpecie(this.pokemon.id);
            this.painel = 1;

          },
          err => {
            console.log(err.message);
            this.errorGetPokemon(id);
          });
    },

    errorGetPokemon(id) {
        this.pokemon.id = id;
        this.pokemon.img = "src/assets/img/404.png";
        this.pokemon.altura = "...";
        this.pokemon.peso = "...";
    },

    getSpecie(id) {
      this.service
        .getSpecie(id)
        .then(
          res => {
            let urls = res.evolution_chain && res.evolution_chain.url ? res.evolution_chain.url.split('/') : [];
            urls = urls.filter(limpaStringVazia);
            this.pokemon.idChain = urls[urls.length-1] ? urls[urls.length-1] : 0;
            this.getEvolutionChain(this.pokemon.idChain);
          },
          err => console.log(err.message));
    },

    getEvolutionChain(id) {
      this.service
        .getEvolutionChain(id)
        .then(
          res => {this.getEvolucoes(res.chain, [])},
          err => console.log(err.message));
    },

    getEvolucoes(obj, array) {
      if(obj != undefined) {
            let name = (obj.species.name.toLowerCase() == this.pokemon.nome.toLowerCase()) ? `(${convertePrimeiraLetraMaiuscula(obj.species.name)})` : obj.species.name;
            if(typeof name == "string"){
                array.push(name);
            }
            this.getEvolucoes(obj.evolves_to[0], array);
        } else {
            this.pokemon.evolucoes = array;
        }
    },

    anterior(){
      if((this.pokemon.id - 1) > 0){
        this.pokemon.id--;
        this.getPokemon(this.pokemon.id);
      }
    },

    proximo() {
      this.pokemon.id++;
      this.getPokemon(this.pokemon.id);
    },

    principal() {
      this.painel = 1;
    },

    statusBasico() {
        this.painel = 2;
    },

    jogos() {
        this.painel = 3;
    },

    movimentos() {
        this.painel = 4;
    },

    evolucao() {
        this.painel = 5;
    }


  }
}
</script>

<style>

</style>
