webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_area_assinante_area_assinante_component__ = __webpack_require__("./src/app/components/area-assinante/area-assinante.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_indicadores_mercado_indicadores_mercado_component__ = __webpack_require__("./src/app/components/indicadores-mercado/indicadores-mercado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_perfil_contratados_perfil_contratados_component__ = __webpack_require__("./src/app/components/perfil-contratados/perfil-contratados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_solicitacoes_especiais_solicitacoes_especiais_component__ = __webpack_require__("./src/app/components/solicitacoes-especiais/solicitacoes-especiais.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_negociacao_coletiva_geral_demo_negociacao_coletiva_geral_demo_component__ = __webpack_require__("./src/app/components/negociacao-coletiva-geral-demo/negociacao-coletiva-geral-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_negociacao_coletiva_geral_negociacao_coletiva_geral_component__ = __webpack_require__("./src/app/components/negociacao-coletiva-geral/negociacao-coletiva-geral.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_negociacao_coletiva_geral_bloqueio_assinatura_bloqueio_assinatura_component__ = __webpack_require__("./src/app/components/negociacao-coletiva-geral/bloqueio-assinatura/bloqueio-assinatura.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_negociacao_coletiva_customizavel_negociacao_coletiva_customizavel_component__ = __webpack_require__("./src/app/components/negociacao-coletiva-customizavel/negociacao-coletiva-customizavel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_negociacao_coletiva_customizavel_bloqueio_assinatura_bloqueio_assinatura_component__ = __webpack_require__("./src/app/components/negociacao-coletiva-customizavel/bloqueio-assinatura/bloqueio-assinatura.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_pesquisa_salarial_demo_pesquisa_salarial_demo_component__ = __webpack_require__("./src/app/components/pesquisa-salarial-demo/pesquisa-salarial-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_pesquisa_salarial_pesquisa_salarial_component__ = __webpack_require__("./src/app/components/pesquisa-salarial/pesquisa-salarial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_pesquisa_salarial_bloqueio_assinatura_bloqueio_assinatura_component__ = __webpack_require__("./src/app/components/pesquisa-salarial/bloqueio-assinatura/bloqueio-assinatura.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_sobre_salariometro_boletim_boletim_component__ = __webpack_require__("./src/app/components/sobre-salariometro/boletim/boletim.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_sobre_salariometro_boletim_cadastrar_component__ = __webpack_require__("./src/app/components/sobre-salariometro/boletim/cadastrar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_sobre_salariometro_metodologia_metodologia_component__ = __webpack_require__("./src/app/components/sobre-salariometro/metodologia/metodologia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_sobre_salariometro_planos_planos_component__ = __webpack_require__("./src/app/components/sobre-salariometro/planos/planos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_sobre_salariometro_quem_somos_quem_somos_component__ = __webpack_require__("./src/app/components/sobre-salariometro/quem-somos/quem-somos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_not_found_404_not_found_404_component__ = __webpack_require__("./src/app/components/not-found-404/not-found-404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_em_construcao_em_construcao_component__ = __webpack_require__("./src/app/components/em-construcao/em-construcao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_app_recuperar_senha_app_recuperar_senha_component__ = __webpack_require__("./src/app/components/app-recuperar-senha/app-recuperar-senha.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'area-assinante', component: __WEBPACK_IMPORTED_MODULE_2__components_area_assinante_area_assinante_component__["a" /* AreaAssinanteComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'indicadores-mercado', component: __WEBPACK_IMPORTED_MODULE_4__components_indicadores_mercado_indicadores_mercado_component__["a" /* IndicadoresMercadoComponent */] },
    { path: 'recuperar-senha/:id', component: __WEBPACK_IMPORTED_MODULE_22__components_app_recuperar_senha_app_recuperar_senha_component__["a" /* AppRecuperarSenhaComponent */] },
    { path: 'perfil-contratados', component: __WEBPACK_IMPORTED_MODULE_5__components_perfil_contratados_perfil_contratados_component__["a" /* PerfilContratadosComponent */] },
    { path: 'solicitacoes-especiais/:idRelatorioPB/:dsRelatorio', component: __WEBPACK_IMPORTED_MODULE_6__components_solicitacoes_especiais_solicitacoes_especiais_component__["a" /* SolicitacoesEspeciaisComponent */] },
    { path: 'negociacao-coletiva-geral-demo', component: __WEBPACK_IMPORTED_MODULE_7__components_negociacao_coletiva_geral_demo_negociacao_coletiva_geral_demo_component__["a" /* NegociacaoColetivaDemoComponent */] },
    { path: 'negociacao-coletiva-geral', component: __WEBPACK_IMPORTED_MODULE_8__components_negociacao_coletiva_geral_negociacao_coletiva_geral_component__["a" /* NegociacaoColetivaComponent */] },
    { path: 'negociacao-coletiva-geral/bloqueio-assinatura', component: __WEBPACK_IMPORTED_MODULE_9__components_negociacao_coletiva_geral_bloqueio_assinatura_bloqueio_assinatura_component__["a" /* NegociacaoColetivaBloqueioAssinaturaComponent */] },
    { path: 'negociacao-coletiva-customizavel', component: __WEBPACK_IMPORTED_MODULE_10__components_negociacao_coletiva_customizavel_negociacao_coletiva_customizavel_component__["a" /* NegociacaoColetivaNewComponent */] },
    { path: 'negociacao-coletiva-customizavel/bloqueio-assinatura', component: __WEBPACK_IMPORTED_MODULE_11__components_negociacao_coletiva_customizavel_bloqueio_assinatura_bloqueio_assinatura_component__["a" /* NegociacaoColetivaNewBloqueioAssinaturaComponent */] },
    { path: 'pesquisa-salarial-demo', component: __WEBPACK_IMPORTED_MODULE_12__components_pesquisa_salarial_demo_pesquisa_salarial_demo_component__["a" /* PesquisaSalarialDemoComponent */] },
    { path: 'pesquisa-salarial', component: __WEBPACK_IMPORTED_MODULE_13__components_pesquisa_salarial_pesquisa_salarial_component__["a" /* PesquisaSalarialComponent */] },
    { path: 'pesquisa-salarial/bloqueio-assinatura', component: __WEBPACK_IMPORTED_MODULE_14__components_pesquisa_salarial_bloqueio_assinatura_bloqueio_assinatura_component__["a" /* PesquisaSalarialBloqueioAssinaturaComponent */] },
    { path: 'sobre/boletim', component: __WEBPACK_IMPORTED_MODULE_15__components_sobre_salariometro_boletim_boletim_component__["a" /* Sobre_BoletimComponent */] },
    { path: 'sobre/boletim/cadastrar', component: __WEBPACK_IMPORTED_MODULE_16__components_sobre_salariometro_boletim_cadastrar_component__["a" /* Sobre_BoletimCadastrarComponent */] },
    { path: 'sobre/metodologia', component: __WEBPACK_IMPORTED_MODULE_17__components_sobre_salariometro_metodologia_metodologia_component__["a" /* Sobre_MetodologiaComponent */] },
    { path: 'sobre/planos', component: __WEBPACK_IMPORTED_MODULE_18__components_sobre_salariometro_planos_planos_component__["a" /* Sobre_PlanosComponent */] },
    { path: 'sobre/quem-somos', component: __WEBPACK_IMPORTED_MODULE_19__components_sobre_salariometro_quem_somos_quem_somos_component__["a" /* Sobre_QuemSomosComponent */] },
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_20__components_not_found_404_not_found_404_component__["a" /* NotFound404Component */] },
    { path: 'em-construcao', component: __WEBPACK_IMPORTED_MODULE_21__components_em_construcao_em_construcao_component__["a" /* EmConstrucaoComponent */] },
    { path: '**', redirectTo: 'not-found' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_locales_pt__ = __webpack_require__("./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_carousel__ = __webpack_require__("./node_modules/ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__progress_kendo_angular_dialog__ = __webpack_require__("./node_modules/@progress/kendo-angular-dialog/dist/fesm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__progress_kendo_angular_inputs__ = __webpack_require__("./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__progress_kendo_angular_layout__ = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/fesm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__db_service__ = __webpack_require__("./src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__spinner_service__ = __webpack_require__("./src/app/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_app_app_component__ = __webpack_require__("./src/app/components/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_app_header_app_header_component__ = __webpack_require__("./src/app/components/app-header/app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_app_footer_app_footer_component__ = __webpack_require__("./src/app/components/app-footer/app-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_app_login_app_login_component__ = __webpack_require__("./src/app/components/app-login/app-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_area_assinante_area_assinante_component__ = __webpack_require__("./src/app/components/area-assinante/area-assinante.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_home_assinatura_component__ = __webpack_require__("./src/app/components/home/_assinatura.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_home_banner_component__ = __webpack_require__("./src/app/components/home/_banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_home_boletins_component__ = __webpack_require__("./src/app/components/home/_boletins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_home_contato_component__ = __webpack_require__("./src/app/components/home/_contato.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_home_conteudos_component__ = __webpack_require__("./src/app/components/home/_conteudos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_home_indicacao_amigo_component__ = __webpack_require__("./src/app/components/home/_indicacao-amigo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_home_noticias_component__ = __webpack_require__("./src/app/components/home/_noticias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_indicadores_mercado_indicadores_mercado_component__ = __webpack_require__("./src/app/components/indicadores-mercado/indicadores-mercado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_perfil_contratados_perfil_contratados_component__ = __webpack_require__("./src/app/components/perfil-contratados/perfil-contratados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_solicitacoes_especiais_solicitacoes_especiais_component__ = __webpack_require__("./src/app/components/solicitacoes-especiais/solicitacoes-especiais.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_negociacao_coletiva_geral_demo_negociacao_coletiva_geral_demo_component__ = __webpack_require__("./src/app/components/negociacao-coletiva-geral-demo/negociacao-coletiva-geral-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_negociacao_coletiva_geral_negociacao_coletiva_geral_component__ = __webpack_require__("./src/app/components/negociacao-coletiva-geral/negociacao-coletiva-geral.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_negociacao_coletiva_geral_bloqueio_assinatura_bloqueio_assinatura_component__ = __webpack_require__("./src/app/components/negociacao-coletiva-geral/bloqueio-assinatura/bloqueio-assinatura.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_negociacao_coletiva_customizavel_negociacao_coletiva_customizavel_component__ = __webpack_require__("./src/app/components/negociacao-coletiva-customizavel/negociacao-coletiva-customizavel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_negociacao_coletiva_customizavel_bloqueio_assinatura_bloqueio_assinatura_component__ = __webpack_require__("./src/app/components/negociacao-coletiva-customizavel/bloqueio-assinatura/bloqueio-assinatura.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_pesquisa_salarial_demo_pesquisa_salarial_demo_component__ = __webpack_require__("./src/app/components/pesquisa-salarial-demo/pesquisa-salarial-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_pesquisa_salarial_pesquisa_salarial_component__ = __webpack_require__("./src/app/components/pesquisa-salarial/pesquisa-salarial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_pesquisa_salarial_bloqueio_assinatura_bloqueio_assinatura_component__ = __webpack_require__("./src/app/components/pesquisa-salarial/bloqueio-assinatura/bloqueio-assinatura.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_sobre_salariometro_boletim_boletim_component__ = __webpack_require__("./src/app/components/sobre-salariometro/boletim/boletim.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_sobre_salariometro_boletim_cadastrar_component__ = __webpack_require__("./src/app/components/sobre-salariometro/boletim/cadastrar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_sobre_salariometro_metodologia_metodologia_component__ = __webpack_require__("./src/app/components/sobre-salariometro/metodologia/metodologia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_sobre_salariometro_planos_planos_component__ = __webpack_require__("./src/app/components/sobre-salariometro/planos/planos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_sobre_salariometro_quem_somos_quem_somos_component__ = __webpack_require__("./src/app/components/sobre-salariometro/quem-somos/quem-somos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_not_found_404_not_found_404_component__ = __webpack_require__("./src/app/components/not-found-404/not-found-404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_em_construcao_em_construcao_component__ = __webpack_require__("./src/app/components/em-construcao/em-construcao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__first_error_pipe__ = __webpack_require__("./src/app/first-error.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_sobre_salariometro_planos_municipio_filter_pipe__ = __webpack_require__("./src/app/components/sobre-salariometro/planos/municipio-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_app_recuperar_senha_app_recuperar_senha_component__ = __webpack_require__("./src/app/components/app-recuperar-senha/app-recuperar-senha.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Módulos Angular







Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["k" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_6__angular_common_locales_pt__["a" /* default */], 'pt');
// Módulos diversos

// Módulos Bootstrap




// Módulos Telerik




// Serviços



// MasterPage




// Demais componentes



























// Pipes



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__components_app_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_app_header_app_header_component__["a" /* AppHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_app_footer_app_footer_component__["a" /* AppFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_app_login_app_login_component__["a" /* AppLoginModalComponent */],
                __WEBPACK_IMPORTED_MODULE_52__components_app_recuperar_senha_app_recuperar_senha_component__["a" /* AppRecuperarSenhaComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_area_assinante_area_assinante_component__["a" /* AreaAssinanteComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_home_assinatura_component__["a" /* Home_AssinaturaComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_home_banner_component__["a" /* Home_BannerComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_home_boletins_component__["a" /* Home_BoletinsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_home_contato_component__["a" /* Home_ContatoComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_home_conteudos_component__["a" /* Home_ConteudosComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_home_indicacao_amigo_component__["a" /* Home_IndicacaoAmigoComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_home_noticias_component__["a" /* Home_NoticiasComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_indicadores_mercado_indicadores_mercado_component__["a" /* IndicadoresMercadoComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_solicitacoes_especiais_solicitacoes_especiais_component__["a" /* SolicitacoesEspeciaisComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_negociacao_coletiva_geral_demo_negociacao_coletiva_geral_demo_component__["a" /* NegociacaoColetivaDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_negociacao_coletiva_geral_negociacao_coletiva_geral_component__["a" /* NegociacaoColetivaComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_negociacao_coletiva_geral_bloqueio_assinatura_bloqueio_assinatura_component__["a" /* NegociacaoColetivaBloqueioAssinaturaComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_negociacao_coletiva_customizavel_negociacao_coletiva_customizavel_component__["a" /* NegociacaoColetivaNewComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_negociacao_coletiva_customizavel_bloqueio_assinatura_bloqueio_assinatura_component__["a" /* NegociacaoColetivaNewBloqueioAssinaturaComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_perfil_contratados_perfil_contratados_component__["a" /* PerfilContratadosComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_pesquisa_salarial_bloqueio_assinatura_bloqueio_assinatura_component__["a" /* PesquisaSalarialBloqueioAssinaturaComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_pesquisa_salarial_demo_pesquisa_salarial_demo_component__["a" /* PesquisaSalarialDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_pesquisa_salarial_pesquisa_salarial_component__["a" /* PesquisaSalarialComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_sobre_salariometro_boletim_boletim_component__["a" /* Sobre_BoletimComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_sobre_salariometro_boletim_cadastrar_component__["a" /* Sobre_BoletimCadastrarComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_sobre_salariometro_metodologia_metodologia_component__["a" /* Sobre_MetodologiaComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_sobre_salariometro_planos_planos_component__["a" /* Sobre_PlanosComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_sobre_salariometro_quem_somos_quem_somos_component__["a" /* Sobre_QuemSomosComponent */],
                __WEBPACK_IMPORTED_MODULE_48__components_not_found_404_not_found_404_component__["a" /* NotFound404Component */],
                __WEBPACK_IMPORTED_MODULE_49__components_em_construcao_em_construcao_component__["a" /* EmConstrucaoComponent */],
                __WEBPACK_IMPORTED_MODULE_50__first_error_pipe__["a" /* FirstErrorPipe */],
                __WEBPACK_IMPORTED_MODULE_51__components_sobre_salariometro_planos_municipio_filter_pipe__["a" /* MunicipioFilterPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__progress_kendo_angular_dialog__["a" /* DialogsModule */],
                __WEBPACK_IMPORTED_MODULE_13__progress_kendo_angular_dropdowns__["a" /* DropDownsModule */],
                __WEBPACK_IMPORTED_MODULE_14__progress_kendo_angular_inputs__["a" /* InputsModule */],
                __WEBPACK_IMPORTED_MODULE_15__progress_kendo_angular_layout__["a" /* LayoutModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__db_service__["a" /* DbService */],
                __WEBPACK_IMPORTED_MODULE_17__session_service__["a" /* SessionService */],
                __WEBPACK_IMPORTED_MODULE_18__spinner_service__["a" /* SpinnerService */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["H" /* LOCALE_ID */], useValue: 'pt' }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_19__components_app_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app-footer/app-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-footer\">\r\n\r\n    <!-- BACK TO TOP -->\r\n    <section class=\"space_arrow\">\r\n        <div class=\"button top\">\r\n            <a href=\"javascript:void(0)\" data-ga data-category=\"footer\" (click)=\"fnTeste()\" data-label=\"voltar_topo\">\r\n                <figure>\r\n                    <img src=\"http://www.fipe.org.br/Content/img/btn_top.png\" alt>\r\n                </figure>\r\n            </a>\r\n        </div>\r\n    </section>\r\n    <!-- / BACK TO TOP -->\r\n\r\n    \r\n    <div class=\"partes\">\r\n        \r\n        <!-- SECTION 01 -->\r\n        <div class=\"parte01\">\r\n            <div class=\"titulo01\">\r\n                <a [routerLink]=\"['/negociacao-coletiva-geral']\">NEGOCIAÇÃO COLETIVA GERAL</a>\r\n            </div>\r\n        </div>\r\n        <!-- / SECTION 01 -->\r\n\r\n        <!-- SECTION 02 -->\r\n        <div class=\"parte02\">\r\n            <div class=\"titulo01\">\r\n                <a [routerLink]=\"['/negociacao-coletiva-customizavel']\">NEGOCIAÇÃO COLETIVA CUSTOMIZÁVEL</a>\r\n            </div>\r\n        </div>\r\n        <!-- / SECTION 02 -->\r\n\r\n        <!-- SECTION 03 -->\r\n        <div class=\"parte03\">\r\n            <div class=\"titulo01\">\r\n                <a [routerLink]=\"['/pesquisa-salarial']\">PESQUISA SALARIAL</a>\r\n            </div>\r\n        </div>\r\n        <!-- / SECTION 03 -->\r\n\r\n        <!-- SECTION 03 -->\r\n        <div class=\"parte04\">\r\n            <div class=\"titulo01\">SOBRE O SALARIÔMETRO</div>\r\n            <div class=\"item\">\r\n                <a [routerLink]=\"['/sobre/quem-somos']\">Quem Somos</a>\r\n            </div>\r\n            <div class=\"item\">\r\n                <a [routerLink]=\"['/sobre/metodologia']\">Metodologia</a>\r\n            </div>\r\n            <div class=\"item\">\r\n                <a [routerLink]=\"['/sobre/boletim']\">Boletim Mensal</a>\r\n            </div>\r\n            <div class=\"item\">\r\n                <a [routerLink]=\"['/sobre/planos']\">Plano de Assinatura</a>\r\n            </div>\r\n        </div>\r\n        <!-- / SECTION 03 -->\r\n\r\n        <!-- SECTION 04 -->\r\n        <div class=\"parte04\">\r\n            <div class=\"titulo01\">SIGA-NOS NAS REDES SOCIAIS</div>\r\n            <div class=\"icones_social\">\r\n                <a href=\"https://www.facebook.com/fipecursos\" target=\"_blank\">\r\n                    <img src=\"/assets/ico_face.png\" alt>\r\n                </a>\r\n            </div>\r\n            <div class=\"icones_social\">\r\n                <a href=\"https://twitter.com/fipecursos\" target=\"_blank\">\r\n                    <img src=\"/assets/ico_twitter.png\" alt>\r\n                </a>\r\n            </div>\r\n            <div class=\"icones_social\">\r\n                <a href=\"https://www.youtube.com/user/fipecursos\" target=\"_blank\">\r\n                    <img src=\"/assets/ico_youtube.png\" alt>\r\n                </a>\r\n            </div>\r\n            <div class=\"icones_social\">\r\n                <a href=\"https://www.linkedin.com/company/fipe---funda-o-instituto-de-pesquisas-econ-micas\" target=\"_blank\">\r\n                    <img src=\"/assets/ico_linkedin.png\" alt>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <!-- / SECTION 04 -->\r\n\r\n        <!-- COPYRIGHT -->\r\n        <div class=\"copy\">\r\n            &copy; <strong>{{ano}} FIPE</strong> - Fundação Instituto de Pesquisas Econômicas. Todos os direitos reservados ®.\r\n            <small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v:20240214.1300</small>\r\n        </div>\r\n        <!-- / COPYRIGHT -->\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/app-footer/app-footer.component.scss":
/***/ (function(module, exports) {

module.exports = ".app-footer {\n  float: left;\n  background-color: #92a4b4;\n  color: #fff;\n  width: 100%;\n  -webkit-box-shadow: inset 0px 11px 8px -10px #7b8d96;\n          box-shadow: inset 0px 11px 8px -10px #7b8d96; }\n  .app-footer .partes {\n    height: 280px;\n    margin-left: auto;\n    margin-right: auto;\n    padding-top: 45px;\n    padding-bottom: 35px;\n    width: 1149px; }\n  .app-footer .partes .parte01 {\n      float: left;\n      font-size: 14px;\n      height: 190px;\n      width: 28%; }\n  .app-footer .partes .parte01 .titulo01 {\n        float: left;\n        font-weight: bold;\n        margin-bottom: 15px;\n        position: relative;\n        width: 100%; }\n  .app-footer .partes .parte01 .titulo01:after {\n          border-bottom: 2px solid #fff;\n          content: \"\";\n          height: 2px;\n          left: 0;\n          top: 30px;\n          position: absolute;\n          width: 22px; }\n  .app-footer .partes .parte01 .item {\n        float: left;\n        margin-top: 10px;\n        width: 100%; }\n  .app-footer .partes .parte02 {\n      float: left;\n      font-size: 14px;\n      height: 36px;\n      width: 24%;\n      height: 160px; }\n  .app-footer .partes .parte02 .titulo01 {\n        float: left;\n        font-weight: bold;\n        margin-bottom: 15px;\n        position: relative;\n        width: 100%; }\n  .app-footer .partes .parte02 .titulo01:after {\n          margin-top: 20px;\n          border-bottom: 2px solid #fff;\n          content: \"\";\n          height: 2px;\n          left: 0;\n          top: 30px;\n          position: absolute;\n          width: 22px; }\n  .app-footer .partes .parte03 {\n      float: left;\n      font-size: 14px;\n      height: 190px;\n      width: 25%; }\n  .app-footer .partes .parte03 .titulo01 {\n        float: left;\n        font-weight: bold;\n        margin-bottom: 15px;\n        position: relative;\n        width: 100%; }\n  .app-footer .partes .parte03 .titulo01:after {\n          border-bottom: 2px solid #fff;\n          content: \"\";\n          height: 2px;\n          left: 0;\n          top: 30px;\n          position: absolute;\n          width: 22px; }\n  .app-footer .partes .parte03 .item {\n        float: left;\n        margin-top: 10px;\n        width: 100%; }\n  .app-footer .partes .parte04 {\n      float: left;\n      font-size: 14px;\n      height: 180px;\n      width: 22%; }\n  .app-footer .partes .parte04 .titulo01 {\n        float: left;\n        font-weight: bold;\n        margin-bottom: 15px;\n        position: relative;\n        width: 100%; }\n  .app-footer .partes .parte04 .titulo01:after {\n          border-bottom: 2px solid #fff;\n          content: \"\";\n          height: 2px;\n          left: 0;\n          top: 30px;\n          position: absolute;\n          width: 22px; }\n  .app-footer .partes .copy {\n      float: left;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      font-size: 11px;\n      height: 20px;\n      width: 100%;\n      padding-bottom: 30px;\n      padding-top: 40px; }\n  .item a:hover {\n  color: #3c3c3c; }\n  .titulo02 a:hover {\n  color: #3c3c3c;\n  font-weight: bold; }\n  section {\n  position: relative;\n  border: 0;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 100%;\n  font-family: inherit; }\n  .button.top {\n  width: 44px;\n  height: 44px;\n  margin: 0 0 -20px -22px !important;\n  position: absolute;\n  bottom: 0;\n  left: 50%; }\n  .button.top figure {\n  width: 44px;\n  height: 44px;\n  margin: 0 auto !important;\n  position: relative; }\n  .figure {\n  display: block;\n  -webkit-margin-before: 1em;\n  -webkit-margin-after: 1em;\n  -webkit-margin-start: 40px;\n  -webkit-margin-end: 40px; }\n  section.space_arrow {\n  width: 100%;\n  height: auto;\n  margin: 0 auto !important;\n  background: #fff;\n  z-index: 2; }\n  .button.top figure img {\n  transition: all .2s ease-in-out;\n  -webkit-transition: all .2s ease-in-out;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto !important;\n  -webkit-transform: scale(1, 1);\n  transform: scale(1, 1);\n  -moz-transform: scale(1, 1);\n  -ms-transform: scale(1, 1);\n  -o-transform: scale(1, 1);\n  position: relative; }\n  .button.top:hover figure img {\n  transform: scale(1.1, 1.1);\n  -moz-transform: scale(1.1, 1.1);\n  -ms-transform: scale(1.1, 1.1);\n  -o-transform: scale(1.1, 1.1);\n  -webkit-transform: scale(1.1, 1.1); }\n  .shadow {\n  width: 980px;\n  height: 56px;\n  margin: -40px auto !important;\n  position: relative;\n  background: url(/assets/sombra.png) center top no-repeat;\n  z-index: 1; }\n  .icones_social {\n  float: left;\n  padding-right: 30px;\n  padding-top: 10px;\n  padding-bottom: 20px; }\n  .parceiro {\n  float: left;\n  padding-right: 30px;\n  padding-top: 10px; }\n"

/***/ }),

/***/ "./src/app/components/app-footer/app-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppFooterComponent = (function () {
    function AppFooterComponent() {
        this.ano = 0;
    }
    AppFooterComponent.prototype.ngOnInit = function () {
        this.ano = new Date().getFullYear();
    };
    AppFooterComponent.prototype.fnTeste = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__("html, body").animate({ scrollTop: 0 }, 900);
        return false;
    };
    AppFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer-root',
            template: __webpack_require__("./src/app/components/app-footer/app-footer.component.html"),
            styles: [__webpack_require__("./src/app/components/app-footer/app-footer.component.scss")]
        })
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header1\">\r\n    <div class=\"linha1\">\r\n        <div class=\"partes\">\r\n            \r\n            <!-- LOGO -->\r\n            <a [routerLink]=\"['/home']\">\r\n                <div class=\"parte1\"></div>\r\n            </a>\r\n            <!-- / LOGO -->\r\n\r\n            <!-- SPACE -->\r\n            <div class=\"parte2\"></div>\r\n            <!-- / SPACE -->\r\n\r\n            <div class=\"parte3\">\r\n\r\n                <!-- SUBSCRIBER -->\r\n                <div class=\"privado\" *ngIf=\"usuario_logado.hash === ''\">\r\n                    <span (click)=\"fnLogin()\">ÁREA DO ASSINANTE</span>\r\n                </div>\r\n                <div class=\"privado icone\" *ngIf=\"usuario_logado.hash !== ''\">\r\n                    <div class=\"btn-group\" dropdown>\r\n                        <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\r\n                            {{usuario_logado.nmUsuario.split(' ')[0]}} <span class=\"caret\"></span>\r\n                        </button>\r\n                        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                            <li role=\"menuitem\"><span class=\"dropdown-item\" [routerLink]=\"['/area-assinante']\">Área do Assinante</span></li>\r\n                            <li role=\"menuitem\"><span class=\"dropdown-item\" (click)=\"sessionService.fnEncerrarSessao()\">Sair</span></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <!-- / SUBSCRIBER -->\r\n\r\n                <!-- SOCIAL -->\r\n                <div class=\"redes-sociais\">\r\n                    <a href=\"https://twitter.com/intent/tweet?text=A%20Fipe%20tem%20atua%C3%A7%C3%A3o%20nas%20%C3%A1reas%20de%20indicadores%20econ%C3%B4micos,%20ensino%20e%20projetos%20e%20pesquisa.%20Acesse&url=http://www.fipe.org.br/pt-br/home&related=\"\r\n                        target=\"_blank\">\r\n                        <img src=\"/assets/redes_sociais_twitter.png\" width=\"72\" height=\"27\">\r\n                    </a>\r\n                    <a href=\"https://www.facebook.com/sharer/sharer.php?u=http://www.fipe.org.br/pt-br/home&display=popup\" target=\"_blank\">\r\n                        <img src=\"/assets/redes_sociais_facebook.png\" width=\"72\" height=\"27\">\r\n                    </a>\r\n                    <a href=\"https://plus.google.com/share?url=http://www.fipe.org.br/pt-br/home\" target=\"_blank\">\r\n                        <img src=\"/assets/redes_sociais_gplus.png\" width=\"72\" height=\"27\">\r\n                    </a>\r\n                </div>\r\n                <!-- / SOCIAL -->\r\n\r\n            </div>\r\n\r\n            <!-- FIPE -->\r\n            <div class=\"parte4\"></div>\r\n            <a href=\"http://www.fipe.org.br\" target=\"_blank\">\r\n                <div class=\"parte5\"></div>\r\n            </a>\r\n            <!-- / FIPE -->\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <!-- EXTENDED MENU -->\r\n    <div class=\"linha2\">\r\n        <div class=\"menu\">\r\n            <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\"\r\n                    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                    <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n                <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n                    <ul class=\"navbar-nav\">\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\r\n                        </li>\r\n                        <li class=\"nav-item dropdown\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/negociacao-coletiva-geral']\">Negociação Coletiva Geral</a>\r\n                        </li>\r\n                        <li class=\"nav-item dropdown\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/negociacao-coletiva-customizavel']\">Negociação Coletiva Customizável</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/pesquisa-salarial']\">Pesquisa Salarial</a>\r\n                        </li>\r\n                        <li class=\"nav-item dropdown\" *ngIf=\"nrRelatorios >0\">\r\n                            <a class=\"nav-link dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                Solicitações Especiais\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-custom\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                                <a class=\"dropdown-item\" *ngFor=\"let item of lstRelatorios\" (click)=\"fnPassParameter(item.idRelatorioPB, item.dsRelatorio)\">{{item.dsRelatorio}}</a>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"nav-item dropdown\">\r\n                            <a class=\"nav-link dropdown\" id=\"navbarDropdownMenuLink\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                Sobre o Salariômetro\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-custom\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                                <a class=\"dropdown-item\" [routerLink]=\"['/sobre/quem-somos']\">Quem Somos</a>\r\n                                <a class=\"dropdown-item\" [routerLink]=\"['/sobre/metodologia']\">Metodologia</a>\r\n                                <a class=\"dropdown-item\" [routerLink]=\"['/sobre/boletim']\">Boletim Mensal</a>\r\n                                <a class=\"dropdown-item\" [routerLink]=\"['/sobre/planos']\">Planos de Assinatura</a>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n    <!-- / EXTENDED MENU -->\r\n\r\n</div>\r\n\r\n<!-- FLAT MENU -->\r\n<div class=\"app-header2\" *ngIf=\"menu_reduzido === true\">\r\n    <div class=\"linha1\">\r\n        <div class=\"partes\">\r\n            <a [routerLink]=\"['/home']\">\r\n                <div class=\"parte1\"></div>\r\n            </a>\r\n            <div class=\"parte2\"></div>\r\n            <div class=\"parte3\">\r\n                <a href=\"https://twitter.com/intent/tweet?text=A%20Fipe%20tem%20atua%C3%A7%C3%A3o%20nas%20%C3%A1reas%20de%20indicadores%20econ%C3%B4micos,%20ensino%20e%20projetos%20e%20pesquisa.%20Acesse&url=http://www.fipe.org.br/pt-br/home&related=\"\r\n                    target=\"_blank\">\r\n                    <img src=\"/assets/redes_sociais_twitter.png\" width=\"72\" height=\"27\">\r\n                </a>\r\n                <a href=\"https://www.facebook.com/sharer/sharer.php?u=http://www.fipe.org.br/pt-br/home&display=popup\" target=\"_blank\">\r\n                    <img src=\"/assets/redes_sociais_facebook.png\" width=\"72\" height=\"27\">\r\n                </a>\r\n                <a href=\"https://plus.google.com/share?url=http://www.fipe.org.br/pt-br/home\" target=\"_blank\">\r\n                    <img src=\"/assets/redes_sociais_gplus.png\" width=\"72\" height=\"27\">\r\n                </a>\r\n            </div>\r\n            <div class=\"parte4\"></div>\r\n            <div class=\"parte5\">\r\n                <div class=\"privado\" *ngIf=\"usuario_logado.hash === ''\">\r\n                    <span (click)=\"fnLogin()\">ÁREA DO ASSINANTE</span>\r\n                </div>\r\n                <div class=\"privado icone\" *ngIf=\"usuario_logado.hash !== ''\">\r\n                    <div class=\"btn-group\" dropdown>\r\n                        <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\r\n                            {{usuario_logado.nmUsuario.split(' ')[0]}} <span class=\"caret\"></span>\r\n                        </button>\r\n                        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                            <li role=\"menuitem\"><span class=\"dropdown-item\" [routerLink]=\"['/area-assinante']\">Área do Assinante</span></li>\r\n                            <li role=\"menuitem\"><span class=\"dropdown-item\" (click)=\"sessionService.fnEncerrarSessao()\">Sair</span></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"parte6\"></div>\r\n            <a href=\"http://www.fipe.org.br\" target=\"_blank\">\r\n                <div class=\"parte7\"></div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"linha2\">\r\n        <div class=\"menu\">\r\n            <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\"\r\n                    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                    <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n                <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n                    <ul class=\"navbar-nav\">\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\r\n                        </li>\r\n                        <li class=\"nav-item dropdown\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/negociacao-coletiva-geral']\">Negociação Coletiva Geral</a>\r\n                        </li>\r\n                        <li class=\"nav-item dropdown\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/negociacao-coletiva-customizavel']\">Negociação Coletiva Customizável</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" [routerLink]=\"['/pesquisa-salarial']\">Pesquisa Salarial</a>\r\n                        </li>\r\n                        <li class=\"nav-item dropdown\" *ngIf=\"nrRelatorios > 0\">\r\n                            <a class=\"nav-link dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                Solicitações Especiais\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-custom\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                                <a class=\"dropdown-item\" *ngFor=\"let item of lstRelatorios\" (click)=\"fnPassParameter(item.idRelatorioPB, item.dsRelatorio)\">{{item.dsRelatorio}}</a>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"nav-item dropdown\">\r\n                            <a class=\"nav-link dropdown\" id=\"navbarDropdownMenuLink\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                Sobre o Salariômetro\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-custom\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                                <a class=\"dropdown-item\" [routerLink]=\"['/sobre/quem-somos']\">Quem Somos</a>\r\n                                <a class=\"dropdown-item\" [routerLink]=\"['/sobre/metodologia']\">Metodologia</a>\r\n                                <a class=\"dropdown-item\" [routerLink]=\"['/sobre/boletim']\">Boletim Mensal</a>\r\n                                <a class=\"dropdown-item\" [routerLink]=\"['/sobre/planos']\">Planos de Assinatura</a>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- / FLAT MENU -->\r\n\r\n<app-login-modal #login></app-login-modal>"

/***/ }),

/***/ "./src/app/components/app-header/app-header.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n@keyframes fadein {\n  from {\n    opacity: 0;\n    margin-top: 10px; }\n  to {\n    opacity: 1;\n    margin-top: 0; } }\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0;\n    margin-top: 10px; }\n  to {\n    opacity: 1;\n    margin-top: 0; } }\n/* Internet Explorer */\n/* Opera < 12.1 */\n.app-header1 {\n  height: 173px;\n  width: 100%; }\n.app-header1 .linha1 {\n    float: left;\n    height: 89px;\n    margin-bottom: 16px;\n    margin-top: 18px;\n    width: 100%; }\n.app-header1 .linha1 .partes {\n      margin-left: auto;\n      margin-right: auto;\n      width: 1149px; }\n.app-header1 .linha1 .partes .parte1 {\n        float: left;\n        background-image: url(\"/assets/logo_salariometro.png\");\n        height: 89px;\n        width: 174px; }\n.app-header1 .linha1 .partes .parte2 {\n        float: left;\n        height: 89px;\n        width: calc(100% - 539px); }\n.app-header1 .linha1 .partes .parte3 {\n        float: left;\n        height: 89px;\n        width: 218px; }\n.app-header1 .linha1 .partes .parte3 .privado {\n          float: left;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          background-color: #ebf0f4;\n          border-radius: 20px;\n          color: #20a1fa;\n          font-weight: bold;\n          font-size: 14px;\n          height: 35px;\n          width: 100%; }\n.app-header1 .linha1 .partes .parte3 .privado .btn-group .btn {\n            border: unset; }\n.app-header1 .linha1 .partes .parte3 .privado .btn-group .btn-primary {\n            color: #20a1fa;\n            background-color: unset;\n            border-color: unset;\n            font-weight: bold;\n            font-size: 14px; }\n.app-header1 .linha1 .partes .parte3 .privado .btn-group .btn-primary.dropdown-toggle:focus {\n            -webkit-box-shadow: unset;\n            box-shadow: unset; }\n.app-header1 .linha1 .partes .parte3 .privado span {\n            cursor: pointer;\n            outline: none; }\n.app-header1 .linha1 .partes .parte3 .icone {\n          background-image: url(\"/assets/icone_user.png\");\n          background-repeat: no-repeat;\n          background-position: 10px center; }\n.app-header1 .linha1 .partes .parte3 .redes-sociais {\n          float: left;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          height: 42px;\n          margin-top: 12px;\n          width: 100%; }\n.app-header1 .linha1 .partes .parte3 .redes-sociais img {\n            cursor: pointer; }\n.app-header1 .linha1 .partes .parte4 {\n        float: left;\n        height: 89px;\n        width: 45px; }\n.app-header1 .linha1 .partes .parte5 {\n        float: left;\n        background-image: url(\"/assets/logo_fipe.png\");\n        height: 89px;\n        width: 102px; }\n.app-header1 .linha2 {\n    float: left;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    border-bottom: 1px solid #becdda;\n    border-top: 1px solid #becdda;\n    height: 50px;\n    width: 100%; }\n.app-header1 .linha2 .menu {\n      float: left;\n      height: 48px;\n      margin-left: auto;\n      margin-right: auto;\n      width: 1149px; }\n.app-header1 .linha2 .menu .navbar .navbar-nav > .show > a, .app-header1 .linha2 .menu .navbar .navbar-nav > .show > a:focus, .app-header1 .linha2 .menu .navbar .navbar-nav > .show > a:hover {\n        background-color: #20a1fa;\n        color: #fff; }\n.app-header1 .linha2 .menu .navbar {\n        height: 48px;\n        padding: 0px;\n        width: 100%; }\n.app-header1 .linha2 .menu .navbar-nav {\n        width: 100%; }\n.app-header1 .linha2 .menu .bg-light {\n        background-color: #fff !important; }\n.app-header1 .linha2 .menu .nav-item {\n        width: 16.66%;\n        cursor: pointer; }\n.app-header1 .linha2 .menu .nav-item .dropdown-menu {\n          border: unset;\n          border-radius: 0px;\n          margin: 0 0 0;\n          border-top: 3px solid;\n          border-right: none;\n          border-left: none;\n          border-bottom: none;\n          border-color: #20a1fa !important;\n          padding: 0 !important;\n          min-width: 250px; }\n.app-header1 .linha2 .menu .nav-item .dropdown-menu .dropdown-submenu {\n            cursor: pointer; }\n.app-header1 .linha2 .menu .nav-item .dropdown-menu .dropdown-item {\n            color: #92a4b4;\n            font-weight: bold;\n            font-size: 14px;\n            padding: .70rem 1.5rem;\n            height: 45px; }\n.app-header1 .linha2 .menu .nav-item .dropdown-menu .dropdown-item:hover {\n            background-color: #ebf0f4;\n            color: #20a1fa; }\n.app-header1 .linha2 .menu .nav-item:hover {\n        background-color: #20a1fa; }\n.app-header1 .linha2 .menu .nav-item:hover .dropdown-menu-custom {\n          display: block;\n          -webkit-animation: fadein .3s;\n                  animation: fadein .3s;\n          -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n                  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175); }\n.app-header1 .linha2 .menu .nav-item:hover .dropdown-item-custom {\n          -webkit-animation: fadein .3s;\n                  animation: fadein .3s;\n          -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n                  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175); }\n.app-header1 .linha2 .menu .nav-item:hover .nav-link {\n          color: #fff; }\n.app-header1 .linha2 .menu .nav-link {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        color: #92a4b4;\n        border-right: 1px solid #becdda;\n        font-weight: bold;\n        font-size: 14px;\n        height: 50px;\n        text-align: center; }\n.app-header1 .linha2 .menu .nav-link:hover {\n        color: #fff; }\n.app-header1 .linha2 .menu .nav-item:first-of-type .nav-link {\n        border-left: 1px solid #becdda; }\n.app-header2 {\n  background-color: #fff;\n  height: 97px;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1000; }\n.app-header2 .linha1 {\n    float: left;\n    height: 65px;\n    width: 100%; }\n.app-header2 .linha1 .partes {\n      margin-left: auto;\n      margin-right: auto;\n      width: 1149px; }\n.app-header2 .linha1 .partes .parte1 {\n        float: left;\n        background-image: url(\"/assets/logo_salariometro_2.png\");\n        height: 65px;\n        width: 245px; }\n.app-header2 .linha1 .partes .parte2 {\n        float: left;\n        height: 65px;\n        width: calc(100% - 834px); }\n.app-header2 .linha1 .partes .parte3 {\n        float: left;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        height: 65px;\n        width: 218px; }\n.app-header2 .linha1 .partes .parte3 img {\n          cursor: pointer; }\n.app-header2 .linha1 .partes .parte4 {\n        float: left;\n        height: 65px;\n        width: 22px; }\n.app-header2 .linha1 .partes .parte5 {\n        float: left;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        height: 65px;\n        width: 193px; }\n.app-header2 .linha1 .partes .parte5 .privado {\n          float: left;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          background-color: #ebf0f4;\n          border-radius: 20px;\n          color: #20a1fa;\n          font-weight: bold;\n          font-size: 14px;\n          height: 27px;\n          width: 100%; }\n.app-header2 .linha1 .partes .parte5 .privado .btn-group .btn {\n            border: unset; }\n.app-header2 .linha1 .partes .parte5 .privado .btn-group .btn-primary {\n            color: #20a1fa;\n            background-color: unset;\n            border-color: unset;\n            font-weight: bold;\n            font-size: 14px; }\n.app-header2 .linha1 .partes .parte5 .privado .btn-group .btn-primary.dropdown-toggle:focus {\n            -webkit-box-shadow: unset;\n            box-shadow: unset; }\n.app-header2 .linha1 .partes .parte5 .privado span {\n            cursor: pointer;\n            outline: none; }\n.app-header2 .linha1 .partes .parte5 .icone {\n          background-image: url(\"/assets/icone_user.png\");\n          background-repeat: no-repeat;\n          background-position: 10px center; }\n.app-header2 .linha1 .partes .parte6 {\n        float: left;\n        height: 65px;\n        width: 100px; }\n.app-header2 .linha1 .partes .parte7 {\n        float: left;\n        background-image: url(\"/assets/logo_fipe_2.png\");\n        height: 65px;\n        width: 55px; }\n.app-header2 .linha2 {\n    float: left;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    border-bottom: 1px solid #becdda;\n    border-top: 1px solid #becdda;\n    height: 32px;\n    width: 100%; }\n.app-header2 .linha2 .menu {\n      float: left;\n      height: 30px;\n      margin-left: auto;\n      margin-right: auto;\n      width: 1149px; }\n.app-header2 .linha2 .menu .navbar .navbar-nav > .show > a, .app-header2 .linha2 .menu .navbar .navbar-nav > .show > a:focus, .app-header2 .linha2 .menu .navbar .navbar-nav > .show > a:hover {\n        background-color: #20a1fa;\n        color: #fff; }\n.app-header2 .linha2 .menu .navbar {\n        height: 30px;\n        padding: 0px;\n        width: 100%; }\n.app-header2 .linha2 .menu .navbar-nav {\n        width: 100%; }\n.app-header2 .linha2 .menu .bg-light {\n        background-color: #fff !important; }\n.app-header2 .linha2 .menu .nav-item {\n        width: 16.66%;\n        cursor: pointer; }\n.app-header2 .linha2 .menu .nav-item .dropdown-menu {\n          border: unset;\n          border-radius: 0px;\n          margin: 0 0 0;\n          border-top: 3px solid;\n          border-right: none;\n          border-left: none;\n          border-bottom: none;\n          border-color: #20a1fa !important;\n          padding: 0 !important;\n          min-width: 250px; }\n.app-header2 .linha2 .menu .nav-item .dropdown-menu .dropdown-submenu {\n            cursor: pointer; }\n.app-header2 .linha2 .menu .nav-item .dropdown-menu .dropdown-item {\n            color: #92a4b4;\n            font-weight: bold;\n            font-size: 14px;\n            padding: .70rem 1.5rem;\n            height: 45px; }\n.app-header2 .linha2 .menu .nav-item .dropdown-menu .dropdown-item:hover {\n            background-color: #ebf0f4;\n            color: #20a1fa; }\n.app-header2 .linha2 .menu .dropdown-menu a:hover .dropdown-menu {\n        display: inline; }\n.app-header2 .linha2 .menu .nav-item:hover {\n        background-color: #20a1fa; }\n.app-header2 .linha2 .menu .nav-item:hover .dropdown-menu-custom {\n          display: block;\n          -webkit-animation: fadein .3s;\n                  animation: fadein .3s;\n          -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n                  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175); }\n.app-header2 .linha2 .menu .nav-item:hover .dropdown-item-custom {\n          -webkit-animation: fadein .3s;\n                  animation: fadein .3s;\n          -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n                  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175); }\n.app-header2 .linha2 .menu .nav-item:hover .nav-link {\n          color: #fff; }\n.app-header2 .linha2 .menu .nav-link {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        color: #92a4b4;\n        border-right: 1px solid #becdda;\n        font-weight: bold;\n        font-size: 13px;\n        height: 32px;\n        line-height: 13px;\n        text-align: center; }\n.app-header2 .linha2 .menu .nav-link:hover {\n        color: #fff; }\n.app-header2 .linha2 .menu .nav-item:first-of-type .nav-link {\n        border-left: 1px solid #becdda; }\n/* Menu multiníveis */\n.navbar-nav li:hover > ul.dropdown-menu {\n  display: block; }\n.dropdown-submenu {\n  position: relative; }\n.dropdown-submenu > .dropdown-menu {\n  top: -3px;\n  left: 100%;\n  margin-top: -6px; }\n/* rotate caret on hover */\n.dropdown-menu > li > a:hover:after {\n  text-decoration: underline;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n"

/***/ }),

/***/ "./src/app/components/app-header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_login_app_login_component__ = __webpack_require__("./src/app/components/app-login/app-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppHeaderComponent = (function () {
    function AppHeaderComponent(sessionService, router) {
        var _this = this;
        this.sessionService = sessionService;
        this.router = router;
        this.menu_reduzido = false;
        this.usuario_logado = null;
        this.lstRelatorios = [];
        this.nrRelatorios = 0;
        // Carrega sessão
        this.sessionService.fnGetSessao();
        this.usuario_logado = this.sessionService.usuario;
        this.lstRelatorios = this.sessionService.usuario.lstRelatorios;
        this.nrRelatorios = this.usuario_logado.nrRelatorios;
        this.sessionService.sessao.subscribe(function (sessao) {
            _this.usuario_logado = sessao;
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__(window).scroll(function () {
            if (__WEBPACK_IMPORTED_MODULE_1_jquery__(window).scrollTop() > 173) {
                _this.menu_reduzido = true;
            }
            else {
                _this.menu_reduzido = false;
            }
            ;
        });
    }
    AppHeaderComponent.prototype.fnLogin = function () {
        this.login.fnShow('header', 0);
    };
    AppHeaderComponent.prototype.fnPassParameter = function (idRelatorio, dsRelatorio) {
        this.router.navigate(['/solicitacoes-especiais', idRelatorio, dsRelatorio]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("login"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__app_login_app_login_component__["a" /* AppLoginModalComponent */])
    ], AppHeaderComponent.prototype, "login", void 0);
    AppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header-root',
            template: __webpack_require__("./src/app/components/app-header/app-header.component.html"),
            styles: [__webpack_require__("./src/app/components/app-header/app-header.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/app-login/app-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" bsModal #modal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <!-- Login com assinatura -->\r\n    <div class=\"modal-dialog modal-lg\" *ngIf=\"origem === 'header'\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 imagem\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"origem === 'header'\">\r\n                    <div class=\"titulo1\">JÁ É NOSSO ASSINANTE?</div>\r\n                    <div class=\"titulo2\">Para continuar sua pesquisa, escolha uma opção:</div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"origem === 'planos'\">\r\n                    <div class=\"titulo1\" style=\"color: red;\">E-MAIL JÁ CADASTRADO</div>\r\n                    <div class=\"titulo2\" style=\"color: red;\">Para continuar sua compra, faça o login:</div>\r\n                </div>\r\n                <div class=\"row center-block\">\r\n                    <div class=\"col-6 campos\" [formGroup]=\"form\">\r\n                        <div class=\"titulo3\">Login para assinantes:</div>\r\n                        <div class=\"form-group\">\r\n                            <input (click)=\"fnHideRecuperarSenha()\" type=\"email\" class=\"form-control\" placeholder=\"E-mail\" maxlength=\"100\"\r\n                                [(ngModel)]=\"item.dsEmail\" formControlName=\"dsEmail\">\r\n                            <div class=\"validacao\"\r\n                                *ngIf=\"form.get('dsEmail').invalid && form.get('dsEmail').touched && (form.get('dsEmail').errors | first_error) === 'required'\">\r\n                                Campo obrigatório</div>\r\n                            <div class=\"validacao\"\r\n                                *ngIf=\"form.get('dsEmail').invalid && form.get('dsEmail').touched && (form.get('dsEmail').errors | first_error) === 'email'\">\r\n                                E-mail inválido</div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input (click)=\"fnHideRecuperarSenha()\" type=\"password\" class=\"form-control\" placeholder=\"Senha\" maxlength=\"50\"\r\n                                [(ngModel)]=\"item.cdSenha\" formControlName=\"cdSenha\">\r\n                            <div class=\"validacao\"\r\n                                *ngIf=\"form.get('cdSenha').invalid && (form.get('cdSenha').dirty || form.get('cdSenha').touched)\">\r\n                                Campo obrigatório</div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <button type=\"button\" class=\"btn btn-primary-confirm\" (click)=\"fnEntrar()\">Entrar</button>\r\n                            <button type=\"button\" class=\"btn btn-primary-confirm\" (click)=\"fnShowRecuperarSenha()\">Esqueci\r\n                                minha senha</button>\r\n                        </div>\r\n                        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showErro === true\">\r\n                            Não foi possível acessar. Verifique se o e-mail e senha estão corretos.\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6 campos\">\r\n                        <div class=\"titulo3\">Assine o Salariômetro</div>\r\n                        <div class=\"form-group\">\r\n                            Acesse os conteúdos regionais e setoriais do seu interesse.\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <button type=\"button\" class=\"btn btn-primary-confirm\" (click)=\"fnPlanos()\">PLANOS DE ASSINATURA</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"row\" *ngIf=\"showRecSenha\">\r\n\r\n                    <div class=\"col-6 campos\">\r\n\r\n                        <div class=\"tituloRecSenha\">Recuperar senha</div>\r\n\r\n                        <form [formGroup]=\"formRecSenha\">\r\n\r\n                            <input type=\"email\" class=\"form-control\" placeholder=\"E-mail\" maxlength=\"100\"\r\n                                [(ngModel)]=\"item.dsRecEmail\" formControlName=\"dsRecEmail\">\r\n\r\n                            <div class=\"validacao\"\r\n                                *ngIf=\"formRecSenha.get('dsRecEmail').invalid && formRecSenha.get('dsRecEmail').touched && (formRecSenha.get('dsRecEmail').errors | first_error) === 'required'\">\r\n                                Campo obrigatório</div>\r\n\r\n                            <div class=\"validacao\"\r\n                                *ngIf=\"formRecSenha.get('dsRecEmail').invalid && formRecSenha.get('dsRecEmail').touched && (formRecSenha.get('dsRecEmail').errors | first_error) === 'email'\">\r\n                                E-mail inválido</div>\r\n\r\n                                <div class=\"validacao\"  *ngIf=\"resetInvalido === true\" >E-mail informado não existe no sitema</div>\r\n                                <div class=\"validacao\"  *ngIf=\"resetValido === true\" >Instrução para recuperação de senha foi encaminhada</div>\r\n\r\n                            <div class=\"form-group\">\r\n\r\n                                <button type=\"button\" class=\"btn btn-primary-confirm\"\r\n                                    (click)=\"fnRecuperarSenha()\">Enviar</button>\r\n                            </div>\r\n\r\n                        </form>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Login simples -->\r\n    <div class=\"modal-dialog modal-md\" *ngIf=\"origem !== 'header'\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 imagem\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"origem === 'header'\">\r\n                    <div class=\"titulo1\">JÁ É NOSSO ASSINANTE?</div>\r\n                    <div class=\"titulo2\">Para continuar sua pesquisa, escolha uma opção:</div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"origem === 'planos'\">\r\n                    <div class=\"titulo1\" style=\"color: red;\">E-MAIL JÁ CADASTRADO</div>\r\n                    <div class=\"titulo2\" style=\"color: red;\">Para continuar sua compra faça login:</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 campos\" [formGroup]=\"form\">\r\n                        <div class=\"titulo3\">Login para assinantes:</div>\r\n                        <div class=\"form-group\">\r\n                            <input (click)=\"fnHideRecuperarSenha()\" type=\"email\" class=\"form-control\" placeholder=\"E-mail\" maxlength=\"100\"\r\n                                [(ngModel)]=\"item.dsEmail\" formControlName=\"dsEmail\">\r\n                            <div class=\"validacao\"\r\n                                *ngIf=\"form.get('dsEmail').invalid && form.get('dsEmail').touched && (form.get('dsEmail').errors | first_error) === 'required'\">\r\n                                Campo obrigatório</div>\r\n                            <div class=\"validacao\"\r\n                                *ngIf=\"form.get('dsEmail').invalid && form.get('dsEmail').touched && (form.get('dsEmail').errors | first_error) === 'email'\">\r\n                                E-mail inválido</div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input (click)=\"fnHideRecuperarSenha()\" type=\"password\" class=\"form-control\" placeholder=\"Senha\" maxlength=\"50\"\r\n                                [(ngModel)]=\"item.cdSenha\" formControlName=\"cdSenha\">\r\n                            <div class=\"validacao\"\r\n                                *ngIf=\"form.get('cdSenha').invalid && (form.get('cdSenha').dirty || form.get('cdSenha').touched)\">\r\n                                Campo obrigatório</div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <button type=\"button\" class=\"btn btn-primary-confirm\" (click)=\"fnEntrar()\">Entrar</button>\r\n                            <button type=\"button\" class=\"btn btn-primary-confirm\" (click)=\"fnShowRecuperarSenha()\">Esqueci\r\n                                minha senha</button>\r\n                        </div>\r\n                        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showErro === true\">\r\n                            Não foi possível acessar. Verifique se o e-mail e senha estão corretos.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"row\" *ngIf=\"showRecSenha\">\r\n\r\n                    <div class=\"col-6 campos\">\r\n\r\n                        <div class=\"tituloRecSenha\">Recuperar senha</div>\r\n\r\n                        <form [formGroup]=\"formRecSenha\">\r\n\r\n                            <input type=\"email\" class=\"form-control\" placeholder=\"E-mail\" maxlength=\"100\"\r\n                                [(ngModel)]=\"item.dsRecEmail\" formControlName=\"dsRecEmail\">\r\n\r\n                            <div class=\"validacao\"\r\n                                *ngIf=\"formRecSenha.get('dsRecEmail').invalid && formRecSenha.get('dsRecEmail').touched && (formRecSenha.get('dsRecEmail').errors | first_error) === 'required'\">\r\n                                Campo obrigatório</div>\r\n\r\n                            <div class=\"validacao\"\r\n                                *ngIf=\"formRecSenha.get('dsRecEmail').invalid && formRecSenha.get('dsRecEmail').touched && (formRecSenha.get('dsRecEmail').errors | first_error) === 'email'\">\r\n                                E-mail inválido</div>\r\n\r\n                                <div class=\"validacao\"  *ngIf=\"resetInvalido === true\" >E-mail informado não existe no sitema</div>\r\n                                <div class=\"validacao\"  *ngIf=\"resetValido === true\" >Instrução para recuperação de senha foi encaminhada</div>\r\n\r\n                            <div class=\"form-group\">\r\n\r\n                                <button type=\"button\" class=\"btn btn-primary-confirm\"\r\n                                    (click)=\"fnRecuperarSenha()\">Enviar</button>\r\n                            </div>\r\n\r\n                        </form>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/app-login/app-login.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal-body {\n  background-color: #ebf0f4;\n  margin: 10px; }\n  .modal-body .imagem {\n    background-image: url(\"/assets/gear2.gif\");\n    background-position: center;\n    background-repeat: no-repeat;\n    height: 92px;\n    width: 100%; }\n  .modal-body .titulo1 {\n    font-size: 18px;\n    font-weight: bold;\n    margin-top: 20px;\n    text-align: center;\n    width: 100%; }\n  .modal-body .titulo2 {\n    color: #3c3c3c;\n    font-size: 16px;\n    font-weight: bold;\n    margin-bottom: 20px;\n    text-align: center;\n    width: 100%; }\n  .modal-body .titulo3 {\n    font-weight: bold;\n    margin-bottom: 20px;\n    width: 100%; }\n  .modal-body .tituloRecSenha {\n    font-weight: bold;\n    width: 100%; }\n  .modal-body .campos {\n    padding: 0px 20px; }\n"

/***/ }),

/***/ "./src/app/components/app-login/app-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLoginModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__db_service__ = __webpack_require__("./src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__spinner_service__ = __webpack_require__("./src/app/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_class__ = __webpack_require__("./src/app/components/app-login/login.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppLoginModalComponent = (function () {
    function AppLoginModalComponent(dbService, router, sessionService, spinnerService) {
        this.dbService = dbService;
        this.router = router;
        this.sessionService = sessionService;
        this.spinnerService = spinnerService;
        this.eventUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.resetValido = false;
        this.resetInvalido = false;
        this.item = new __WEBPACK_IMPORTED_MODULE_7__login_class__["a" /* Login */]();
        this.showErro = false;
        this.showRecSenha = false;
        this.origem = 'header';
        this.etapa = 0;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            dsEmail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email]),
            cdSenha: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
        this.formRecSenha = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            dsRecEmail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email]),
        });
    }
    AppLoginModalComponent.prototype.fnEntrar = function () {
        var _this = this;
        // Valida formulário
        if (!this.form.valid) {
            // Exibe erros
            for (var ctrl in this.form.controls) {
                this.form.controls[ctrl].markAsTouched();
            }
        }
        else {
            this.dbService.post('Login', this.item).subscribe(function (result) {
                // Encerra spinner
                _this.spinnerService.stop();
                if (result.autenticado === true) {
                    _this.sessionService.usuario.hash = result.hash;
                    _this.sessionService.usuario.nmUsuario = result.nmUsuario;
                    _this.sessionService.usuario.idUsuario = result.idUsuario;
                    _this.sessionService.usuario.lstRelatorios = result.lstRelatorios;
                    _this.sessionService.fnSetSessao();
                    //EGS 30.03.2022 Google Analitics Log de login
                    gtag('config', __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].googleAnalyticsId, {});
                    gtag('event', 'login_realizado', { 'method': '' });
                    _this.modal.hide();
                    if (_this.origem === 'planos') {
                        _this.etapa = -1;
                        _this.eventUpdate.emit(_this.etapa);
                    }
                    location.reload();
                }
                else {
                    _this.showErro = true;
                }
            });
        }
    };
    AppLoginModalComponent.prototype.fnPlanos = function () {
        this.modal.hide();
        this.router.navigate(['/sobre/planos']);
        //EGS 30.11.2020 Envia email da compra para Debug em HML
        //this.dbService.get('Assinatura/RetornoCieloEGS').subscribe(result => {});        
    };
    AppLoginModalComponent.prototype.fnShow = function (area, etapa, email) {
        if (area === void 0) { area = 'header'; }
        if (etapa === void 0) { etapa = 0; }
        if (email === void 0) { email = ''; }
        this.origem = area;
        this.etapa = etapa;
        this.item = new __WEBPACK_IMPORTED_MODULE_7__login_class__["a" /* Login */]();
        this.formRecSenha.controls['dsRecEmail'].setValue(email);
        this.form.reset();
        this.modal.show();
    };
    AppLoginModalComponent.prototype.fnShowRecuperarSenha = function () {
        this.showRecSenha = true;
    };
    AppLoginModalComponent.prototype.fnHideRecuperarSenha = function () {
        this.showRecSenha = false;
    };
    AppLoginModalComponent.prototype.fnRecuperarSenha = function () {
        var _this = this;
        // Valida formulário
        if (!this.formRecSenha.valid) {
            // Exibe erros
            for (var ctrl in this.formRecSenha.controls) {
                this.formRecSenha.controls[ctrl].markAsTouched();
            }
        }
        else {
            var recSenha = new __WEBPACK_IMPORTED_MODULE_7__login_class__["b" /* RecSenha */]();
            recSenha.dsRecEmail = this.formRecSenha.controls['dsRecEmail'].value;
            this.dbService.post('Login/RecuperarSenha', recSenha).subscribe(function (result) {
                if (result.validaSenha === true) {
                    _this.resetValido = true;
                    _this.resetInvalido = false;
                }
                else {
                    _this.resetValido = false;
                    _this.resetInvalido = true;
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* ModalDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* ModalDirective */])
    ], AppLoginModalComponent.prototype, "modal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], AppLoginModalComponent.prototype, "eventUpdate", void 0);
    AppLoginModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-modal',
            template: __webpack_require__("./src/app/components/app-login/app-login.component.html"),
            styles: [__webpack_require__("./src/app/components/app-login/app-login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_6__spinner_service__["a" /* SpinnerService */]])
    ], AppLoginModalComponent);
    return AppLoginModalComponent;
}());



/***/ }),

/***/ "./src/app/components/app-login/login.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RecSenha; });
/* unused harmony export ViewRetornoRecSenha */
var Login = (function () {
    function Login() {
        this.dsEmail = '';
        this.cdSenha = '';
    }
    return Login;
}());

var RecSenha = (function () {
    function RecSenha() {
        this.dsRecEmail = '';
    }
    return RecSenha;
}());

var ViewRetornoRecSenha = (function () {
    function ViewRetornoRecSenha() {
        this.validaSenha = false;
    }
    return ViewRetornoRecSenha;
}());



/***/ }),

/***/ "./src/app/components/app-recuperar-senha/app-recuperar-senha.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n    <div class=\"row\">\n\n        <div class=\"col-3 campos\">\n\n            <div class=\"tituloRecSenha\">Crie uma nova senha</div>\n\n            <form [formGroup]=\"formRecSenha\">\n\n                <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Senha\" maxlength=\"100\"\n                        formControlName=\"numSenha\">\n\n                    <div class=\"validacao\"\n                        *ngIf=\"formRecSenha.get('numSenha').invalid && formRecSenha.get('numSenha').touched && (formRecSenha.get('numSenha').errors | first_error) === 'required'\">\n                        Campo obrigatório</div>\n\n                </div>\n\n                <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Confirmar Senha\" maxlength=\"100\"\n                        formControlName=\"confSenha\">\n\n                    <div class=\"validacao\"\n                        *ngIf=\"formRecSenha.get('confSenha').invalid && formRecSenha.get('confSenha').touched && (formRecSenha.get('confSenha').errors | first_error) === 'required'\">\n                        Campo obrigatório</div>\n\n                </div>\n\n                <div class=\"validacao\">\n                    <div class=\"validacao\" *ngIf=\"senhaDiferente === true\">As senhas informadas devem ser iguais</div>\n                    <div class=\"validacao\" *ngIf=\"resetValido === true\">Senha atualizada com sucesso</div>\n                    <div class=\"validacao\" *ngIf=\"senhaMenor === true\">A senha deve conter no minimo 8 caracteres</div>\n\n                    <div class=\"form-group\">\n                        <button type=\"button\" class=\"btn btn-primary-confirm\" (click)=\"fnEntrar()\">Enviar</button>\n                    </div>\n                </div>\n\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/app-recuperar-senha/app-recuperar-senha.component.scss":
/***/ (function(module, exports) {

module.exports = ".body {\n  height: 300px;\n  margin-left: 100px;\n  padding-top: 50px; }\n"

/***/ }),

/***/ "./src/app/components/app-recuperar-senha/app-recuperar-senha.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRecuperarSenhaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__db_service__ = __webpack_require__("./src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_class__ = __webpack_require__("./src/app/components/app-recuperar-senha/login.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppRecuperarSenhaComponent = (function () {
    function AppRecuperarSenhaComponent(dbService, router, route, sessionService) {
        this.dbService = dbService;
        this.router = router;
        this.route = route;
        this.sessionService = sessionService;
        this.senhaDiferente = false;
        this.resetValido = false;
        this.senhaMenor = false;
        this.formRecSenha = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            numSenha: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            confSenha: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
    }
    AppRecuperarSenhaComponent.prototype.fnEntrar = function () {
        var _this = this;
        this.senhaDiferente = false;
        this.resetValido = false;
        this.senhaMenor = false;
        // Valida formulário
        if (!this.formRecSenha.valid) {
            // Exibe erros
            for (var ctrl in this.formRecSenha.controls) {
                this.formRecSenha.controls[ctrl].markAsTouched();
            }
        }
        else {
            var recSenha = new __WEBPACK_IMPORTED_MODULE_5__login_class__["a" /* RecSenha */]();
            recSenha.numSenha = this.formRecSenha.controls['numSenha'].value;
            recSenha.confSenha = this.formRecSenha.controls['confSenha'].value;
            recSenha.codSenha = this.route.snapshot.params['id'];
            if (recSenha.numSenha.length < 8 || recSenha.confSenha.length < 8) {
                this.senhaMenor = true;
            }
            else if (recSenha.numSenha !== recSenha.confSenha) {
                this.senhaDiferente = true;
            }
            else {
                this.dbService.post('Login/ResetSenha', recSenha).subscribe(function (result) {
                    if (result.validaSenha === true) {
                        _this.resetValido = true;
                    }
                    else {
                    }
                });
            }
        }
    };
    AppRecuperarSenhaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recuperar-senha',
            template: __webpack_require__("./src/app/components/app-recuperar-senha/app-recuperar-senha.component.html"),
            styles: [__webpack_require__("./src/app/components/app-recuperar-senha/app-recuperar-senha.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__session_service__["a" /* SessionService */]])
    ], AppRecuperarSenhaComponent);
    return AppRecuperarSenhaComponent;
}());



/***/ }),

/***/ "./src/app/components/app-recuperar-senha/login.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Login */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecSenha; });
/* unused harmony export ViewRetornoRecSenha */
var Login = (function () {
    function Login() {
        this.dsEmail = '';
        this.cdSenha = '';
    }
    return Login;
}());

var RecSenha = (function () {
    function RecSenha() {
        this.numSenha = '';
        this.confSenha = '';
        this.codSenha = '';
    }
    return RecSenha;
}());

var ViewRetornoRecSenha = (function () {
    function ViewRetornoRecSenha() {
        this.validaSenha = false;
    }
    return ViewRetornoRecSenha;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-header-root></app-header-root>\n    <router-outlet></router-outlet>\n    <app-footer-root></app-footer-root>\n</div>"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                gtag('config', __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].googleAnalyticsId, {
                    page_path: event.urlAfterRedirects
                });
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/components/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/area-assinante/area-assinante.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topo\">\r\n    <div class=\"topo-titulo\">ÁREA DO ASSINANTE</div>\r\n    <div class=\"topo-nav\">\r\n        <nav aria-label=\"breadcrumb\">\r\n            <ol class=\"breadcrumb\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a [routerLink]=\"['/home']\">HOME</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">ÁREA DO ASSINANTE</li>\r\n            </ol>\r\n        </nav>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"aviso\">\r\n    <div class=\"mensagem\">\r\n        Mantenha seus dados atualizados para receber as novidades do Salariômetro\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content\">\r\n    <div class=\"app-area-assinante\">\r\n        <div class=\"col-12 titulo\">\r\n            Dados Pessoais\r\n        </div>\r\n        <div class=\"col-12 row\">\r\n            <div class=\"col-9 formulario\" [formGroup]=\"form1\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-3 col-form-label\">Nome</label>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === true\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"200\" [(ngModel)]=\"item.pessoal_nmCliente\" formControlName=\"pessoal_nmCliente\">\r\n                        <div class=\"validacao\" *ngIf=\"form1.get('pessoal_nmCliente').invalid && (form1.get('pessoal_nmCliente').dirty || form1.get('pessoal_nmCliente').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === false\">\r\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" [value]=\"item.pessoal_nmCliente\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-3 col-form-label\">Tipo de Documento</label>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === true\">\r\n                        <div class=\"form-check form-check-inline\" style=\"padding-top: calc(.375rem + 1px)\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"pessoal_cdDocumento\" id=\"cbxDocumento1\" [value]=\"'1'\" [(ngModel)]=\"item.pessoal_cdDocumento\" formControlName=\"pessoal_cdDocumento\" (change)=\"cbxDocumento_Changed()\">\r\n                            <label class=\"form-check-label\" for=\"cbxDocumento1\">CPF</label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"pessoal_cdDocumento\" id=\"cbxDocumento2\" [value]=\"'2'\" [(ngModel)]=\"item.pessoal_cdDocumento\" formControlName=\"pessoal_cdDocumento\" (change)=\"cbxDocumento_Changed()\">\r\n                            <label class=\"form-check-label\" for=\"cbxDocumento2\">CNPJ</label>\r\n                        </div>\r\n                        <div class=\"validacao\" *ngIf=\"form1.get('pessoal_cdDocumento').invalid && (form1.get('pessoal_cdDocumento').dirty || form1.get('pessoal_cdDocumento').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === false\">\r\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" [value]=\"item.pessoal_cdDocumento === '1' ? 'CPF' : 'CNPJ'\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-3 col-form-label\">Nº do Documento</label>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === true\">\r\n                        <kendo-maskedtextbox [mask]=\"maskDocumento\" style=\"width: 100%\" [(ngModel)]=\"item.pessoal_nuDocumento\" formControlName=\"pessoal_nuDocumento\"></kendo-maskedtextbox>\r\n                        <div class=\"validacao\" *ngIf=\"form1.get('pessoal_nuDocumento').invalid && (form1.get('pessoal_nuDocumento').dirty || form1.get('pessoal_nuDocumento').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === false\">\r\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" [value]=\"item.pessoal_nuDocumento\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-3 col-form-label\">Cargo/Ocupação</label>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === true\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"50\" [(ngModel)]=\"item.pessoal_dsOcupacao\" formControlName=\"pessoal_dsOcupacao\">\r\n                        <div class=\"validacao\" *ngIf=\"form1.get('pessoal_dsOcupacao').invalid && (form1.get('pessoal_dsOcupacao').dirty || form1.get('pessoal_dsOcupacao').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === false\">\r\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" [value]=\"item.pessoal_dsOcupacao\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-3 col-form-label\">Organização</label>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === true\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"100\" [(ngModel)]=\"item.pessoal_dsOrganizacao\" formControlName=\"pessoal_dsOrganizacao\">\r\n                        <div class=\"validacao\" *ngIf=\"form1.get('pessoal_dsOrganizacao').invalid && (form1.get('pessoal_dsOrganizacao').dirty || form1.get('pessoal_dsOrganizacao').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === false\">\r\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" [value]=\"item.pessoal_dsOrganizacao\">\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- EGS 30.11.2020 Pesquisa do Endereco por CEP  ------------------------------------------------------------------------------------- -->\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-3 col-form-label\">CEP</label>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === true\">\r\n                        <kendo-maskedtextbox type=\"text\" prompt=\" \" mask=\"00000-000\" maxlength=\"10\" class=\"form-control\" id=\"pessoal_dsCEP\" formControlName=\"pessoal_dsCEP\" (keyup)=\"fnCep($event.target.value)\"></kendo-maskedtextbox>\r\n                    </div>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === false\">\r\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" [value]=\"item.pessoal_dsCEP\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-3 col-form-label\">Endereço</label>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === true\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"100\" [(ngModel)]=\"item.pessoal_dsEndereco\" formControlName=\"pessoal_dsEndereco\">\r\n                        <div class=\"validacao\" *ngIf=\"form1.get('pessoal_dsEndereco').invalid && (form1.get('pessoal_dsEndereco').dirty || form1.get('pessoal_dsEndereco').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === false\">\r\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" [value]=\"item.pessoal_dsEndereco\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-3 col-form-label\">Número</label>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === true\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"15\" [(ngModel)]=\"item.pessoal_dsNumero\" formControlName=\"pessoal_dsNumero\">\r\n                        <div class=\"validacao\" *ngIf=\"form1.get('pessoal_dsNumero').invalid && (form1.get('pessoal_dsNumero').dirty || form1.get('pessoal_dsNumero').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === false\">\r\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" [value]=\"item.pessoal_dsNumero\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-3 col-form-label\">Complemento <small>(Apto, Casa)</small></label>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === true\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"50\" [(ngModel)]=\"item.pessoal_dsComplemento\" formControlName=\"pessoal_dsComplemento\">\r\n                        <div class=\"validacao\" *ngIf=\"form1.get('pessoal_dsComplemento').invalid && (form1.get('pessoal_dsComplemento').dirty || form1.get('pessoal_dsComplemento').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === false\">\r\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" [value]=\"item.pessoal_dsComplemento\">\r\n                    </div>\r\n                </div>                \r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-3 col-form-label\">Bairro</label>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === true\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"100\" [(ngModel)]=\"item.pessoal_dsBairro\" formControlName=\"pessoal_dsBairro\">\r\n                        <div class=\"validacao\" *ngIf=\"form1.get('pessoal_dsBairro').invalid && (form1.get('pessoal_dsBairro').dirty || form1.get('pessoal_dsBairro').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === false\">\r\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" [value]=\"item.pessoal_dsBairro\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-3 col-form-label\">Município</label>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === true\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"100\" [(ngModel)]=\"item.pessoal_dsMunicipio\" formControlName=\"pessoal_dsMunicipio\">\r\n                        <div class=\"validacao\" *ngIf=\"form1.get('pessoal_dsMunicipio').invalid && (form1.get('pessoal_dsMunicipio').dirty || form1.get('pessoal_dsMunicipio').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === false\">\r\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" [value]=\"item.pessoal_dsMunicipio\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-3 col-form-label\">Estado/UF</label>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === true\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"2\" [(ngModel)]=\"item.pessoal_dsEstado\" formControlName=\"pessoal_dsEstado\">\r\n                        <div class=\"validacao\" *ngIf=\"form1.get('pessoal_dsEstado').invalid && (form1.get('pessoal_dsEstado').dirty || form1.get('pessoal_dsEstado').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === false\">\r\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" [value]=\"item.pessoal_dsEstado\">\r\n                    </div>\r\n                </div>                \r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-3 col-form-label\">Telefone</label>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === true\">\r\n                        <kendo-maskedtextbox [mask]=\"mask\" style=\"width: 100%\" [(ngModel)]=\"item.pessoal_nuTelefone\" formControlName=\"pessoal_nuTelefone\"\r\n                            (blur)=\"tbxTelefone_Blur()\" (valueChange)=\"tbxTelefone_Changed()\"></kendo-maskedtextbox>\r\n                        <div class=\"validacao\" *ngIf=\"form1.get('pessoal_nuTelefone').invalid && (form1.get('pessoal_nuTelefone').dirty || form1.get('pessoal_nuTelefone').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === false\">\r\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" [value]=\"item.pessoal_nuTelefone\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-3 col-form-label\">E-mail</label>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === true\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"100\" [(ngModel)]=\"item.pessoal_dsEmail\" formControlName=\"pessoal_dsEmail\">\r\n                        <div class=\"validacao\" *ngIf=\"form1.get('pessoal_dsEmail').invalid && form1.get('pessoal_dsEmail').touched && (form1.get('pessoal_dsEmail').errors | first_error) === 'required'\">Campo obrigatório</div>\r\n                        <div class=\"validacao\" *ngIf=\"form1.get('pessoal_dsEmail').invalid && form1.get('pessoal_dsEmail').touched && (form1.get('pessoal_dsEmail').errors | first_error) === 'email'\">E-mail inválido</div>\r\n                        <div class=\"validacao\" *ngIf=\"form1.get('pessoal_dsEmail').invalid && form1.get('pessoal_dsEmail').touched && (form1.get('pessoal_dsEmail').errors | first_error) === 'duplicate'\">E-mail já utilizado</div>\r\n                    </div>\r\n                    <div class=\"col-6\" *ngIf=\"showForm1 === false\">\r\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" [value]=\"item.pessoal_dsEmail\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <button type=\"button\" class=\"btn btn-primary-confirm\" *ngIf=\"showForm1 === false\" (click)=\"fnEditar1()\">EDITAR</button>\r\n                <button type=\"button\" class=\"btn btn-primary-confirm\" *ngIf=\"showForm1 === true\"  (click)=\"fnSalvar1()\">SALVAR</button>\r\n                <button type=\"button\" class=\"btn btn-primary-cancel\"  *ngIf=\"showForm1 === true\"  (click)=\"fnEditar1()\">CANCELAR</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 titulo\">\r\n            Trocar Senha\r\n        </div>\r\n        <div class=\"col-12 row\">\r\n            <div class=\"col-9 formulario\" [formGroup]=\"form2\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-3 col-form-label\">Senha</label>\r\n                    <div class=\"col-6\" *ngIf=\"showForm2 === true\">\r\n                        <input type=\"password\" class=\"form-control\" maxlength=\"50\" [(ngModel)]=\"item.pessoal_cdSenha\" formControlName=\"pessoal_cdSenha\">\r\n                        <div class=\"validacao\" *ngIf=\"form2.get('pessoal_cdSenha').invalid && form2.get('pessoal_cdSenha').touched && (form2.get('pessoal_cdSenha').errors | first_error) === 'required'\">Campo obrigatório</div>\r\n                        <div class=\"validacao\" *ngIf=\"form2.get('pessoal_cdSenha').invalid && form2.get('pessoal_cdSenha').touched && (form2.get('pessoal_cdSenha').errors | first_error) === 'minlength'\">Mínimo de 8 caracteres</div>\r\n                    </div>\r\n                    <div class=\"col-6\" *ngIf=\"showForm2 === false\">\r\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" value=\"*****\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\" *ngIf=\"showForm2 === true\">\r\n                    <label class=\"col-3 col-form-label\">Confirme a Nova Senha</label>\r\n                    <div class=\"col-6\" *ngIf=\"showForm2 === true\">\r\n                        <input type=\"password\" class=\"form-control\" maxlength=\"50\" [(ngModel)]=\"item.pessoal_cdSenha1\" formControlName=\"pessoal_cdSenha1\">\r\n                        <div class=\"validacao\" *ngIf=\"form2.get('pessoal_cdSenha1').invalid && form2.get('pessoal_cdSenha1').touched && (form2.get('pessoal_cdSenha1').errors | first_error) === 'required'\">Campo obrigatório</div>\r\n                        <div class=\"validacao\" *ngIf=\"form2.get('pessoal_cdSenha1').invalid && form2.get('pessoal_cdSenha1').touched && (form2.get('pessoal_cdSenha1').errors | first_error) === 'minlength'\">Mínimo de 8 caracteres</div>\r\n                        <div class=\"validacao\" *ngIf=\"form2.get('pessoal_cdSenha1').invalid && form2.get('pessoal_cdSenha1').touched && (form2.get('pessoal_cdSenha1').errors | first_error) === 'comparacao'\">As senhas devem ser iguais</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <button type=\"button\" class=\"btn btn-primary-confirm\" *ngIf=\"showForm2 === false\" (click)=\"fnEditar2()\">EDITAR</button>\r\n                <button type=\"button\" class=\"btn btn-primary-confirm\" *ngIf=\"showForm2 === true\" (click)=\"fnSalvar2()\">SALVAR</button>\r\n                <button type=\"button\" class=\"btn btn-primary-cancel\" *ngIf=\"showForm2 === true\" (click)=\"fnEditar2()\">CANCELAR</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 titulo\">\r\n            Planos de Assinatura\r\n        </div>\r\n        <div class=\"col-12 row\">\r\n            <div class=\"col-7 formulario\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th scope=\"col\">#</th>\r\n                            <th scope=\"col\">Pedido</th>\r\n                            <th scope=\"col\">Produto</th>\r\n                            <th scope=\"col\">Itens</th>\r\n                            <th scope=\"col\">Situação</th>\r\n                            <th scope=\"col\">Expira em</th>\r\n                            <!-- <th scope=\"col\">Anexar Comprovante de Pagamento</th> -->\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let l of item.planos; let i = index;\">\r\n                            <th scope=\"row\" style=\"width: 20px\">{{i+1}}</th>\r\n                            <td style=\"width: 200px\">5245-{{l.idPedido}}</td>\r\n                            <td style=\"width: 200px\">{{l.dsProduto}}</td>\r\n                            <td style=\"width: 150px\" *ngIf=\"l.idProduto === 1\"><span class=\"DetalhePlano\" (click)=\"fnExibirDetalhePlano(l.idPedido, l.idProduto)\">{{l.qtdeMunicipio}} município(s)</span></td>\r\n                            <td style=\"width: 150px\" *ngIf=\"l.idProduto === 2\"><span class=\"DetalhePlano\" (click)=\"fnExibirDetalhePlano(l.idPedido, l.idProduto)\">{{l.qtdeUf}} UF(s)<br/>{{l.qtdeAtividade}} Atividade(s)</span></td>\r\n                            <td style=\"width: 50px\">{{l.situacao}}</td>\r\n                            <td style=\"width: 50px\"*ngIf=\"l.situacao === 'Aprovado'\">{{l.dtExpiracao}}</td>\r\n                            <!-- <td style=\"width: 150px\"></td> -->\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"col-2\"></div>\r\n            <div class=\"col-3\">\r\n                <button type=\"button\" class=\"btn btn-primary-confirm\" [routerLink]=\"['/sobre/planos']\">ASSINAR NOVOS PLANOS</button>\r\n                <br />\r\n                <br />\r\n                <a href=\"/assets/Termos.pdf\" target=\"_blank\">Clique aqui para ver os termos da sua assinatura</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #modal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog  modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 id=\"dialog-name\" class=\"modal-title pull-left\">Detalhe da Compra</h4>\r\n                <button type=\"button\" class=\"close pull-right\" (click)=\"modal.hide()\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\" *ngIf=\"detalheProduto === 1\">\r\n                    <div class=\"col-12\">\r\n                        <h6>Município(s) adquirido(s)</h6>\r\n                        <ul style=\"max-height: 200px\">\r\n                            <li *ngFor=\"let l of detalhePlano.municipio\">{{l}}</li>\r\n                        </ul>\r\n                        <h6>Ao adquirir o município acima, os dados apresentados também incluem informações sobre os seguintes municípios da mesma microrregião:</h6>\r\n                        <ul style=\"max-height: 200px\">\r\n                            <li *ngFor=\"let l of detalhePlano.municipioExtra\">{{l}}</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"detalheProduto === 2\">\r\n                    <div class=\"col-6\">\r\n                        <h6>UF(s) adquirida(s)</h6>\r\n                        <ul style=\"max-height: 600px\">\r\n                            <li *ngFor=\"let l of detalhePlano.uf\">{{l}}</li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <h6>Atividade(s) adquirida(s)</h6>\r\n                        <ul style=\"max-height: 600px\">\r\n                            <li *ngFor=\"let l of detalhePlano.atividade\">{{l}}</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/area-assinante/area-assinante.component.scss":
/***/ (function(module, exports) {

module.exports = ".topo {\n  background-image: url(\"/assets/topos/area_assinante.png\"); }\n\n.aviso {\n  float: left;\n  background-color: #20a1fa;\n  height: 100px;\n  width: 100%; }\n\n.aviso .mensagem {\n    background-image: url(\"/assets/icone_user_star.png\");\n    background-position: left center;\n    background-repeat: no-repeat;\n    color: #fff;\n    font-size: 16px;\n    font-weight: bold;\n    height: 100px;\n    line-height: 100px;\n    margin-left: auto;\n    margin-right: auto;\n    padding-left: 100px;\n    width: 1149px; }\n\n.app-area-assinante {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 80px;\n  width: 1149px; }\n\n.app-area-assinante .titulo {\n    float: left;\n    border-bottom: 1px solid #3c3c3c;\n    color: #3c3c3c;\n    font-size: 30px;\n    margin-top: 30px;\n    margin-bottom: 40px; }\n\n.app-area-assinante .formulario {\n    float: left; }\n\n.app-area-assinante .DetalhePlano {\n    cursor: pointer;\n    color: #20a1fa; }\n\n.modal .modal-body ul {\n  line-height: 2;\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/app/components/area-assinante/area-assinante.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaAssinanteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__db_service__ = __webpack_require__("./src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spinner_service__ = __webpack_require__("./src/app/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cadastro_class__ = __webpack_require__("./src/app/components/area-assinante/cadastro.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AreaAssinanteComponent = (function () {
    function AreaAssinanteComponent(dbService, sessionService, spinnerService) {
        this.dbService = dbService;
        this.sessionService = sessionService;
        this.spinnerService = spinnerService;
        this.item = new __WEBPACK_IMPORTED_MODULE_6__cadastro_class__["a" /* Cadastro */]();
        this.detalhePlano = new __WEBPACK_IMPORTED_MODULE_6__cadastro_class__["b" /* DetalhePlano */]();
        this.detalheProduto = 0;
        this.mask = "(00) 0000-00009";
        this.maskDocumento = "000.000.000-00";
        this.showForm1 = false;
        this.showForm2 = false;
        this.url_Cep = "https://viacep.com.br/ws/";
        this.form1 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            pessoal_nmCliente: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_cdDocumento: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_nuDocumento: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_dsOcupacao: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_dsCEP: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_dsEndereco: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_dsNumero: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_dsComplemento: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            pessoal_dsBairro: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            pessoal_dsMunicipio: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_dsEstado: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_dsOrganizacao: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_nuTelefone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_dsEmail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', { validators: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email], asyncValidators: this.ValidaEmail(), updateOn: 'blur' })
        });
        this.form2 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            pessoal_cdSenha: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(8)]),
            pessoal_cdSenha1: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(8), this.ValidaSenha()])
        });
        //EGS 30.03.2022 Google Analitics Log de login
        gtag('config', __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].googleAnalyticsId, {});
        gtag('event', 'area_assinante', { 'method': '' });
        this.load();
    }
    AreaAssinanteComponent.prototype.load = function () {
        var _this = this;
        this.spinnerService.start();
        this.dbService.post('Cliente/AreaAssinante', this.sessionService.usuario.hash).subscribe(function (result) {
            // Encerra spinner
            _this.spinnerService.stop();
            // Guarda objetos
            _this.item.pessoal_nmCliente = result.pessoal_nmCliente;
            _this.item.pessoal_cdDocumento = result.pessoal_cdDocumento;
            _this.item.pessoal_nuDocumento = result.pessoal_nuDocumento;
            _this.item.pessoal_dsOcupacao = result.pessoal_dsOcupacao;
            _this.item.pessoal_dsCEP = result.pessoal_dsCEP;
            _this.item.pessoal_dsEndereco = result.pessoal_dsEndereco;
            _this.item.pessoal_dsNumero = result.pessoal_dsNumero;
            _this.item.pessoal_dsComplemento = result.pessoal_dsComplemento;
            _this.item.pessoal_dsBairro = result.pessoal_dsBairro;
            _this.item.pessoal_dsMunicipio = result.pessoal_dsMunicipio;
            _this.item.pessoal_dsEstado = result.pessoal_dsEstado;
            _this.item.pessoal_dsOrganizacao = result.pessoal_dsOrganizacao;
            _this.item.pessoal_nuTelefone = result.pessoal_nuTelefone;
            _this.item.pessoal_dsEmail = result.pessoal_dsEmail;
            _this.item.planos = result.planos;
        });
    };
    AreaAssinanteComponent.prototype.fnEditar1 = function () {
        this.showForm1 = !this.showForm1;
    };
    AreaAssinanteComponent.prototype.fnEditar2 = function () {
        this.showForm2 = !this.showForm2;
        this.form2.reset();
    };
    AreaAssinanteComponent.prototype.fnExibirDetalhePlano = function (idPedido, idProduto) {
        var _this = this;
        this.dbService.get('Assinatura/DetalhePlano/?idPedido=' + idPedido + '&idProduto=' + idProduto).subscribe(function (result) {
            // Encerra spinner
            _this.spinnerService.stop();
            // Guarda objetos
            _this.detalhePlano = result;
            _this.detalheProduto = idProduto;
            // Exibe tela
            _this.modal.show();
        });
    };
    AreaAssinanteComponent.prototype.fnSalvar1 = function () {
        var _this = this;
        // Valida formulário
        if (!this.form1.valid) {
            // Exibe erros
            for (var ctrl in this.form1.controls) {
                this.form1.controls[ctrl].markAsTouched();
            }
        }
        else {
            this.dbService.post('Cliente/AtualizarDadosCadastrais/?hash=' + this.sessionService.usuario.hash, this.item).subscribe(function (result) {
                // Encerra spinner
                _this.spinnerService.stop();
                if (result.confirmacao === true) {
                    _this.fnEditar1();
                }
            });
        }
    };
    AreaAssinanteComponent.prototype.fnSalvar2 = function () {
        var _this = this;
        // Valida formulário
        if (!this.form2.valid) {
            // Exibe erros
            for (var ctrl in this.form2.controls) {
                this.form2.controls[ctrl].markAsTouched();
            }
        }
        else {
            this.dbService.post('Cliente/AtualizarSenha/?hash=' + this.sessionService.usuario.hash, this.item.pessoal_cdSenha).subscribe(function (result) {
                // Encerra spinner
                _this.spinnerService.stop();
                if (result.confirmacao === true) {
                    _this.fnEditar2();
                }
            });
        }
    };
    AreaAssinanteComponent.prototype.ValidaEmail = function () {
        var _this = this;
        return function (control) {
            return new Promise(function (resolve) {
                _this.dbService.post('Cliente/VerificarEmail/?hash=' + _this.sessionService.usuario.hash, _this.item.pessoal_dsEmail).subscribe(function (result) {
                    // Encerra spinner
                    _this.spinnerService.stop();
                    if (result.emailDisponivel === true) {
                        resolve(null);
                    }
                    else {
                        resolve({ "duplicate": true });
                    }
                });
            });
        };
    };
    AreaAssinanteComponent.prototype.ValidaSenha = function () {
        var _this = this;
        return function (control) {
            if (_this.item.pessoal_cdSenha === _this.item.pessoal_cdSenha1) {
                return null;
            }
            else {
                return { comparacao: true };
            }
        };
    };
    AreaAssinanteComponent.prototype.cbxDocumento_Changed = function () {
        if (this.item.pessoal_cdDocumento === '1') {
            this.maskDocumento = "000.000.000-00";
        }
        else {
            this.maskDocumento = "00.000.000/0000-00";
        }
    };
    AreaAssinanteComponent.prototype.tbxTelefone_Blur = function () {
        if (this.item.pessoal_nuTelefone.trim().length === 10) {
            this.item.pessoal_nuTelefone += " ";
        }
    };
    AreaAssinanteComponent.prototype.tbxTelefone_Changed = function () {
        if (this.item.pessoal_nuTelefone.trim().length === 11) {
            this.mask = "(00) 00000-0009";
        }
        else {
            this.mask = "(00) 0000-00009";
        }
    };
    /* ===========================================================================================
     *  Edinaldo FIPE
     *  Dez/2020
     *  Pesquisa o Logradouro pelo CEP
     ===========================================================================================*/
    AreaAssinanteComponent.prototype.fnCep = function (cep) {
        cep = cep.replace(/ /gi, '');
        cep = cep.replace(/\-/gi, '');
        if (cep.length == 8) {
            var sUrl = this.url_Cep + cep + '/json/';
            this.getCEPs(sUrl);
        }
    };
    AreaAssinanteComponent.prototype.getCEPs = function (url) {
        var _this = this;
        fetch(url)
            .then(function (res) { return res.json(); })
            .then(function (json) { return _this.showContent(json); });
    };
    AreaAssinanteComponent.prototype.showContent = function (cep) {
        this.item.pessoal_dsCEP = cep.cep;
        this.item.pessoal_dsEndereco = cep.logradouro;
        this.item.pessoal_dsNumero = '';
        this.item.pessoal_dsComplemento = '';
        this.item.pessoal_dsBairro = cep.bairro;
        this.item.pessoal_dsMunicipio = cep.localidade;
        this.item.pessoal_dsEstado = cep.uf;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* ModalDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* ModalDirective */])
    ], AreaAssinanteComponent.prototype, "modal", void 0);
    AreaAssinanteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-area-assinante-root',
            template: __webpack_require__("./src/app/components/area-assinante/area-assinante.component.html"),
            styles: [__webpack_require__("./src/app/components/area-assinante/area-assinante.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_4__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_5__spinner_service__["a" /* SpinnerService */]])
    ], AreaAssinanteComponent);
    return AreaAssinanteComponent;
}());



/***/ }),

/***/ "./src/app/components/area-assinante/cadastro.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cadastro; });
/* unused harmony export Plano */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DetalhePlano; });
/* unused harmony export OutPutGetCep */
/* unused harmony export OutputGetCidade */
var Cadastro = (function () {
    function Cadastro() {
        this.pessoal_nmCliente = '';
        this.pessoal_cdDocumento = '';
        this.pessoal_nuDocumento = '';
        this.pessoal_dsOcupacao = '';
        this.pessoal_dsOrganizacao = '';
        this.pessoal_dsCEP = ''; //EGS 30.11.2020 Pesquisa o endereco por CEP
        this.pessoal_dsEndereco = '';
        this.pessoal_dsNumero = '';
        this.pessoal_dsComplemento = '';
        this.pessoal_dsBairro = '';
        this.pessoal_dsMunicipio = '';
        this.pessoal_dsEstado = '';
        this.pessoal_nuTelefone = '';
        this.pessoal_dsEmail = '';
        this.pessoal_cdSenha = '';
        this.pessoal_cdSenha1 = '';
        this.planos = [];
    }
    return Cadastro;
}());

var Plano = (function () {
    function Plano() {
        this.idPedido = 0;
        this.idProduto = 0;
        this.dsProduto = '';
        this.dtExpiracao = '';
        this.qtdeAtividade = 0;
        this.qtdeMunicipio = 0;
        this.qtdeUf = 0;
    }
    return Plano;
}());

var DetalhePlano = (function () {
    function DetalhePlano() {
        this.municipio = [];
        this.municipioExtra = [];
        this.uf = [];
        this.atividade = [];
    }
    return DetalhePlano;
}());

var OutPutGetCep = (function () {
    function OutPutGetCep() {
    }
    return OutPutGetCep;
}());

var OutputGetCidade = (function () {
    function OutputGetCidade() {
    }
    return OutputGetCidade;
}());



/***/ }),

/***/ "./src/app/components/em-construcao/em-construcao.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BANNER -->\r\n<div class=\"topo\">\r\n    <div class=\"topo-titulo\">EM CONSTRUÇÃO</div>\r\n    <div class=\"topo-nav\">\r\n        <nav aria-label=\"breadcrumb\">\r\n            <ol class=\"breadcrumb\">\r\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">PÁGINA EM DESENVOLVIMENTO</li>\r\n            </ol>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<!-- / BANNER -->\r\n\r\n<div class=\"em-construcao\">\r\n\r\n    <!-- PAGE NOT FOUND -->\r\n    <div class=\"info\">\r\n        <div class=\"not-found\">\r\n                Página em construção.\r\n        </div>\r\n        <!-- <div class=\"back-home\">\r\n                Esta página foi desativada e será substituída por outra, contendo um conjunto de indicadores do mercado de trabalho\r\n                Em breve você terá acesso às informações desta página. \r\n                <br />\r\n                Clique no botão abaixo para retornar à página inicial.\r\n        </div> -->\r\n        <div class=\"back-home\">\r\n                Esta página foi desativada e será substituída por outra, \r\n                <br />\r\n                contendo um conjunto de indicadores do mercado de trabalho.\r\n        </div>\r\n    </div>\r\n    <!-- / PAGE NOT FOUND -->\r\n\r\n    <!-- BACK HOME -->\r\n    <div class=\"btn-home\">\r\n        <div class=\"btn-primary-outline\">\r\n            <a [routerLink]=\"['/home']\">Home</a>\r\n        </div>\r\n    </div>\r\n    <!-- / BACK HOME -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/em-construcao/em-construcao.component.scss":
/***/ (function(module, exports) {

module.exports = ".topo {\n  background-image: url(\"/assets/topos/under_construction.png\"); }\n\n.em-construcao {\n  float: left;\n  background-image: url(\"/assets/bg_404.png\");\n  background-repeat: repeat;\n  height: 350px;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.info {\n  width: 1149px;\n  padding-top: 50px; }\n\n.info {\n  width: 100%;\n  height: 230px; }\n\n.not-found {\n  color: #3c3c3c;\n  text-align: center;\n  font-size: 60px;\n  float: left;\n  width: 100%;\n  font-family: \"Cardo\";\n  font-weight: bold; }\n\n.back-home {\n  color: #3c3c3c;\n  text-align: center;\n  font-size: 20px;\n  float: left;\n  width: 100%; }\n\n.btn-home {\n  float: left;\n  width: 100%; }\n\n.btn-primary-outline {\n  margin: auto;\n  border: 1px solid #20a1fa;\n  border-radius: 2px;\n  color: #20a1fa;\n  font-size: 14px;\n  padding: 5px 10px;\n  cursor: pointer;\n  width: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #fff; }\n\n.btn-primary-outline:hover {\n  background-color: #20a1fa;\n  border-color: #20a1fa;\n  color: #fff !important; }\n"

/***/ }),

/***/ "./src/app/components/em-construcao/em-construcao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmConstrucaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmConstrucaoComponent = (function () {
    function EmConstrucaoComponent() {
    }
    EmConstrucaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-em-construcao',
            template: __webpack_require__("./src/app/components/em-construcao/em-construcao.component.html"),
            styles: [__webpack_require__("./src/app/components/em-construcao/em-construcao.component.scss")]
        })
    ], EmConstrucaoComponent);
    return EmConstrucaoComponent;
}());



/***/ }),

/***/ "./src/app/components/home/_assinatura.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-assinatura\">\n    <div class=\"assinatura\">\n\n        <!-- CALL TO ACTION -->\n        <div class=\"parte1\">\n            <h3 style=\"font-weight:bold\">Tenha acesso aos conteúdos regionais e setoriais.</h3>\n            O Salariômetro apresenta os resultados para o Brasil como um todo.\n            <br />\n            Para conhecer os resultados regionalizados e setorizados, cadastre-se e escolha um plano de assinatura.\n        </div>\n        <!-- / CALL TO ACTION -->\n\n        <!-- BUTTON -->\n        <div class=\"parte2\">\n            <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/sobre/planos']\">CONHEÇA NOSSOS PLANOS</button>\n        </div>\n        <!-- / BUTTON -->\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/_assinatura.component.scss":
/***/ (function(module, exports) {

module.exports = ".home-assinatura {\n  float: left;\n  background-color: #20a1fa;\n  width: 100%; }\n  .home-assinatura .assinatura {\n    color: #fff;\n    height: 150px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 30px 100px;\n    width: 1349px; }\n  .home-assinatura .assinatura .parte1 {\n      float: left;\n      height: 90px;\n      letter-spacing: 1px;\n      width: calc(100% - 240px); }\n  .home-assinatura .assinatura .parte2 {\n      float: left;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      height: 90px;\n      width: 240px; }\n  .home-assinatura .assinatura .parte2 .btn-primary {\n        color: #fff;\n        background-color: transparent;\n        border-color: #fff;\n        border-radius: 20px;\n        font-size: 12px;\n        letter-spacing: 2px;\n        padding: 0.575rem .95rem; }\n  .home-assinatura .assinatura .parte2 .btn-primary:hover {\n        color: #20a1fa;\n        background-color: #fff;\n        border-color: #fff; }\n"

/***/ }),

/***/ "./src/app/components/home/_assinatura.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home_AssinaturaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Home_AssinaturaComponent = (function () {
    function Home_AssinaturaComponent() {
    }
    Home_AssinaturaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-assinatura',
            template: __webpack_require__("./src/app/components/home/_assinatura.component.html"),
            styles: [__webpack_require__("./src/app/components/home/_assinatura.component.scss")]
        })
    ], Home_AssinaturaComponent);
    return Home_AssinaturaComponent;
}());



/***/ }),

/***/ "./src/app/components/home/_banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-banner\">\r\n    <div class=\"painel\">\r\n\r\n        <!-- TABS -->\r\n        <div class=\"links\">\r\n            <div class=\"link\" (click)=\"fnAlterarView(1)\" [ngClass]=\"{ 'selecionado': view === 1 }\">QUEM SOMOS</div>\r\n            <div class=\"separador\"></div>\r\n            <div class=\"link\" (click)=\"fnAlterarView(2)\" [ngClass]=\"{ 'selecionado': view === 2 }\">METODOLOGIA</div>\r\n            <div class=\"separador\"></div>\r\n            <div class=\"link\" (click)=\"fnAlterarView(3)\" [ngClass]=\"{ 'selecionado': view === 3 }\">DEMONSTRAÇÕES</div>\r\n            <div class=\"separador\"></div>\r\n            <div class=\"link\" (click)=\"fnAlterarView(4)\" [ngClass]=\"{ 'selecionado': view === 4 }\" [routerLink]=\"['/sobre/planos']\">ASSINE</div>\r\n            \r\n        </div>\r\n        <!-- / TABS -->\r\n\r\n        <!-- TAB 01 -->\r\n        <div class=\"conteudo\" *ngIf=\"view === 1\" [@enterAnimation]>\r\n            <div class=\"titulo\">\r\n                Nós Investimos Recursos para Analisar o Mercado de Trabalho Brasileiro\r\n            </div>\r\n            <div class=\"texto\">\r\n                O Salariômetro é uma atividade da FIPE que disponibiliza informações sobre as ofertas de emprego no país.\r\n            </div>\r\n            <div class=\"acao\">\r\n                <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/sobre/quem-somos']\">SAIBA MAIS</button>\r\n            </div>\r\n        </div>\r\n        <!-- / TAB 01 -->\r\n\r\n        <!-- TAB 02 -->\r\n        <div class=\"conteudo\" *ngIf=\"view === 2\" [@enterAnimation]>\r\n            <div class=\"titulo\">\r\n                Transformamos dados em informações úteis e acessíveis para todos\r\n            </div>\r\n            <div class=\"texto\">\r\n                Conheça os procedimentos adotados pela FIPE para obter os indicadores e os resultados sobre o mercado de trabalho apresentados no Salariômetro.\r\n            </div>\r\n            <div class=\"acao\">\r\n                <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/sobre/metodologia']\">SAIBA MAIS</button>\r\n            </div>\r\n        </div>\r\n        <!-- / TAB 02 -->\r\n\r\n        <!-- TAB 03\r\n        <div class=\"conteudo\" *ngIf=\"view === 3\" [@enterAnimation] >\r\n            <div class=\"titulo\">\r\n                Nossa missão é <br /> produzir e disponibilizar informações\r\n            </div>\r\n            <div class=\"texto\">\r\n                Acreditamos que os mercados funcionam melhor quando as informações são abundantes e acessíveis. Conheça nossos Planos de Assinatura.\r\n            </div>\r\n            <div class=\"acao\">\r\n                <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/sobre/planos']\" >SAIBA MAIS</button>\r\n            </div>\r\n        </div> -->\r\n\r\n        <!-- TAB 03 -->\r\n        <div class=\"conteudo\" *ngIf=\"view === 3\" [@enterAnimation] >\r\n            <div class=\"titulo\">\r\n                Nossa missão é <br /> produzir e disponibilizar informações\r\n            </div>\r\n            <div class=\"texto\">\r\n                Entenda a abrangência dos nossos produtos clicando nas demonstrações abaixo.\r\n            </div>\r\n            <div class=\"acao\">\r\n                <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/negociacao-coletiva-geral-demo']\" >DEMONSTRAÇÂO NEGOCIAÇÃO COLETIVA GERAL</button>\r\n            </div>\r\n            <div class=\"acao\">\r\n                <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/pesquisa-salarial-demo']\" >DEMONSTRAÇÂO PESQUISA SALARIAL</button>\r\n            </div>\r\n        </div>\r\n        <!-- / TAB 03 -->\r\n\r\n        <!-- IMG LOGO -->\r\n        <div class= \"logo-banner\">\r\n            <img src=\"/assets/logo_salariometro_glass.png\">\r\n        </div>\r\n        <!-- / IMG LOGO -->\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/_banner.component.scss":
/***/ (function(module, exports) {

module.exports = ".home-banner {\n  float: left;\n  background-image: url(\"/assets/banner_home.png\");\n  height: 489px;\n  width: 100%; }\n  .home-banner .painel {\n    color: #fff;\n    height: 489px;\n    margin-left: auto;\n    margin-right: auto;\n    position: relative;\n    width: 1149px; }\n  .home-banner .painel .links {\n      float: left;\n      font-size: 14px;\n      font-weight: bold;\n      margin-top: 40px;\n      width: 46%; }\n  .home-banner .painel .links .link {\n        float: left;\n        cursor: pointer;\n        border-bottom: 1px solid #fff;\n        padding-bottom: 8px; }\n  .home-banner .painel .links .link.selecionado {\n        border-bottom: 4px solid #20a1fa;\n        padding-bottom: 6px; }\n  .home-banner .painel .links .separador {\n        float: left;\n        border-bottom: 1px solid #fff;\n        height: 30px;\n        padding-bottom: 8px;\n        width: 37px; }\n  .home-banner .painel .conteudo {\n      float: left;\n      position: absolute;\n      top: 60px;\n      width: 40%; }\n  .home-banner .painel .conteudo .titulo {\n        float: left;\n        font-size: 40px;\n        margin-top: 40px;\n        width: 100%;\n        line-height: 55px; }\n  .home-banner .painel .conteudo .texto {\n        float: left;\n        margin-top: 15px;\n        margin-bottom: 10px;\n        width: 100%;\n        font-size: 18px; }\n  .home-banner .painel .conteudo .acao {\n        float: left;\n        margin-top: 20px;\n        width: 100%; }\n  .home-banner .painel .conteudo .acao .btn-primary {\n          color: #fff;\n          background-color: transparent;\n          border-color: #fff;\n          border-radius: 20px;\n          font-size: 12px;\n          letter-spacing: 2px;\n          padding: 0.575rem .95rem; }\n  .home-banner .painel .conteudo .acao .btn-primary:hover {\n          color: rgba(0, 0, 0, 0.7);\n          background-color: #fff;\n          border-color: #fff; }\n  .home-banner .painel .logo-banner {\n      float: left;\n      width: 54%;\n      padding-top: 85px;\n      padding-left: 25px; }\n"

/***/ }),

/***/ "./src/app/components/home/_banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home_BannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Home_BannerComponent = (function () {
    function Home_BannerComponent() {
        this.view = 1;
    }
    Home_BannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].timer(9000, 9000);
        timer.subscribe(function (t) {
            if (_this.view === 3) {
                _this.view = 0;
            }
            _this.view += 1;
        });
    };
    Home_BannerComponent.prototype.fnAlterarView = function (view) {
        this.view = view;
    };
    Home_BannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-banner',
            template: __webpack_require__("./src/app/components/home/_banner.component.html"),
            styles: [__webpack_require__("./src/app/components/home/_banner.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('enterAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ 'opacity': 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ 'opacity': 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ 'opacity': 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ 'opacity': 0 }))
                    ])
                ])
            ]
        })
    ], Home_BannerComponent);
    return Home_BannerComponent;
}());



/***/ }),

/***/ "./src/app/components/home/_boletins.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- TITLE -->\n<div class=\"titulo\">\n    <h2>BOLETIM MENSAL</h2>\n    <span class=\"subtitulo\">Acompanhe os boletins mensais que resumem e consolidam os principais resultados obtidos no período</span>\n</div>\n<!-- / TITLE -->\n\n<!-- BULLETIN -->\n<div class=\"boletins\">\n    <div class=\"boletim\" *ngFor=\"let l of lista_boletins\">\n        <div class=\"imagem\" [style.background-image]=\"'url(/assets/boletins/imagens/' + l.urlImagem + ')'\">\n            <div class=\"view-full-size\" (click)=\"fnAbrirPDF(l.urlPdf)\">\n                <span>Leia<br> Mais</span>\n            </div>\n        </div>\n        <div class=\"detalhes\">\n            <div class=\"data\">\n                {{l.nuMes}} DE {{l.nuAno}}\n            </div>\n            <div class=\"titulo1\" (click)=\"fnAbrirPDF(l.urlPdf)\">{{ (l.dsTitulo.length > 40) ? (l.dsTitulo | slice:0:40) + '...' : (l.dsTitulo) }}</div>\n            <div class=\"descricao\" (click)=\"fnAbrirPDF(l.urlPdf)\">{{ (l.dsDetalhes.length > 75) ? (l.dsDetalhes | slice:0:75) + '...' : (l.dsDetalhes) }}</div>\n        </div>\n    </div>\n</div>\n<!-- / BULLETIN -->\n\n<!-- BUTTONS -->\n<div class=\"boletins-vermais\">\n    <div class=\"vermais\">\n        <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/sobre/boletim/cadastrar']\">QUERO RECEBER OS PRÓXIMOS BOLETINS</button>\n        <button type=\"button\" class=\"btn btn-primary-text\" [routerLink]=\"['/sobre/boletim']\"> BOLETINS ANTERIORES <i class=\"fa fa-angle-right\"></i></button>\n    </div>\n</div>\n<!-- / BUTTONS -->"

/***/ }),

/***/ "./src/app/components/home/_boletins.component.scss":
/***/ (function(module, exports) {

module.exports = ".titulo {\n  float: left;\n  margin-top: 50px;\n  margin-bottom: 30px;\n  text-align: center;\n  width: 100%; }\n  .titulo h2 {\n    color: #20a1fa;\n    font-weight: bold;\n    margin-bottom: 0px; }\n  .titulo .subtitulo {\n    color: #3c3c3c;\n    font-size: 14px; }\n  .boletins {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 35px;\n  width: 1149px; }\n  .boletins .boletim {\n    float: left;\n    height: 335px;\n    margin-right: 56px;\n    width: 245px; }\n  .boletins .boletim .imagem {\n      float: left;\n      background-repeat: no-repeat;\n      height: 165px;\n      opacity: 1;\n      position: relative;\n      -webkit-transition: all 0.3s linear 0s;\n      transition: all 0.3s linear 0s;\n      width: 245px; }\n  .boletins .boletim .imagem .view-full-size {\n        background: black none repeat scroll 0 0;\n        border-radius: 110px 0 0;\n        bottom: 0;\n        color: #ffffff;\n        cursor: pointer;\n        height: 80px;\n        opacity: 0;\n        overflow: hidden;\n        padding-left: 15px;\n        padding-top: 32px;\n        position: absolute;\n        right: 0;\n        text-align: center;\n        text-transform: uppercase;\n        -webkit-transition: all 0.3s linear 0s;\n        transition: all 0.3s linear 0s;\n        width: 80px;\n        z-index: 0;\n        font-size: 12px; }\n  .boletins .boletim .imagem:hover {\n      background-position: -10px -10px;\n      opacity: 0.5; }\n  .boletins .boletim .imagem:hover .view-full-size {\n        opacity: 1; }\n  .boletins .boletim .detalhes {\n      float: left;\n      height: 190px;\n      line-height: 19px;\n      padding: 20px 15px;\n      width: 100%;\n      background-color: #ebf0f4; }\n  .boletins .boletim .detalhes .data {\n        float: left;\n        font-size: 12px;\n        height: 20px;\n        width: 100%;\n        color: #20a1fa;\n        font-weight: 700; }\n  .boletins .boletim .detalhes .titulo1 {\n        float: left;\n        font-size: 17px;\n        font-weight: bold;\n        height: 36px;\n        margin-top: 15px;\n        margin-bottom: 14px;\n        text-align: left;\n        width: 100%;\n        cursor: pointer;\n        color: #3c3c3c; }\n  .boletins .boletim .detalhes .descricao {\n        float: left;\n        color: #3c3c3c;\n        font-size: 15px;\n        text-align: left;\n        width: 100%;\n        cursor: pointer; }\n  .boletins .boletim:nth-last-child(1) {\n    margin-right: 0px; }\n  .boletins-vermais {\n  margin-left: auto;\n  margin-right: auto;\n  width: 1149px; }\n  .boletins-vermais .vermais {\n    float: left;\n    margin-top: 60px;\n    text-align: center;\n    width: 1149px; }\n  .boletins-vermais .vermais .btn-primary {\n      color: #20a1fa;\n      background-color: transparent;\n      border-color: #20a1fa;\n      border-radius: 20px;\n      font-size: 12px;\n      letter-spacing: 2px;\n      padding: 0.575rem .95rem;\n      margin-left: 225px; }\n  .boletins-vermais .vermais .btn-primary:hover {\n      color: #fff;\n      background-color: #20a1fa;\n      border-color: #20a1fa; }\n  .boletins-vermais .vermais .btn-primary-text {\n      color: #20a1fa;\n      font-size: 12px;\n      letter-spacing: 2px;\n      padding: 0.575rem .95rem;\n      float: right;\n      background-color: transparent;\n      border: none; }\n  .boletins-vermais .vermais .btn-primary-text:hover {\n      color: #fff;\n      background-color: #20a1fa;\n      border-color: #20a1fa; }\n"

/***/ }),

/***/ "./src/app/components/home/_boletins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home_BoletinsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db_service__ = __webpack_require__("./src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner_service__ = __webpack_require__("./src/app/spinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Home_BoletinsComponent = (function () {
    function Home_BoletinsComponent(dbService, spinnerService) {
        this.dbService = dbService;
        this.spinnerService = spinnerService;
        this.lista_boletins = [];
        // Carrega lateral
        this.boletinsLoad();
    }
    Home_BoletinsComponent.prototype.fnAbrirPDF = function (url) {
        window.open('/assets/boletins/pdfs/' + url, '_blank');
    };
    Home_BoletinsComponent.prototype.boletinsLoad = function () {
        var _this = this;
        this.dbService.get('Boletim/GetUltimos4').subscribe(function (result) {
            // Encerra spinner
            _this.spinnerService.stop();
            // Guarda objetos
            _this.lista_boletins = result;
        });
    };
    Home_BoletinsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-boletins',
            template: __webpack_require__("./src/app/components/home/_boletins.component.html"),
            styles: [__webpack_require__("./src/app/components/home/_boletins.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_2__spinner_service__["a" /* SpinnerService */]])
    ], Home_BoletinsComponent);
    return Home_BoletinsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/_contato.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contato; });
var Contato = (function () {
    function Contato() {
        this.nmContato = '';
        this.dsEmail = '';
        this.nuTelefone = '';
        this.dsMensagem = '';
    }
    return Contato;
}());



/***/ }),

/***/ "./src/app/components/home/_contato.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-contato\">\n    <div class=\"contact-left\">\n        <div class=\"parte1\"></div>\n    </div>\n\n    <div class=\"contact-center\">\n    </div>\n\n    <div class=\"contact-right\">\n        <div class=\"parte2\">\n\n            <!-- TITLE AND CONTENT -->\n            <div class=\"titulo\">\n                <h2>CONTATO</h2>\n                <span class=\"subtitulo\">Entre em contato conosco preenchendo o formulário abaixo ou envie um e-mail diretamente para salarios@fipe.org.br</span>\n            </div>\n            <!-- / TITLE AND CONTENT -->\n\n            <!-- FORM -->\n            <div class=\"formulario\" [formGroup]=\"form\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Nome\" maxlength=\"100\" [(ngModel)]=\"item.nmContato\" formControlName=\"nmContato\">\n                <input type=\"email\" class=\"form-control\" placeholder=\"E-mail\" maxlength=\"100\" [(ngModel)]=\"item.dsEmail\" formControlName=\"dsEmail\">\n                <kendo-maskedtextbox [mask]=\"mask\" style=\"width: 100%\" [(ngModel)]=\"item.nuTelefone\" formControlName=\"nuTelefone\" (blur)=\"tbxTelefone_Blur()\" (valueChange)=\"tbxTelefone_Changed()\"></kendo-maskedtextbox>\n                <textarea class=\"form-control\" rows=\"5\" placeholder=\"Mensagem\" maxlength=\"500\" [(ngModel)]=\"item.dsMensagem\" formControlName=\"dsMensagem\"></textarea>\n                <div class= \"acao_02\" *ngIf=\"showConfirmacao === true\">Mensagem enviada com sucesso!</div>\n                <div class=\"validacao\">\n                    <span *ngIf=\"showErro === true\">{{mensagemErro}}</span>\n                </div>\n                <button type=\"button\" class=\"btn btn-primary-confirm\" (click)=\"fnEnviar()\">ENVIAR</button>\n            </div>\n            <!-- / FORM -->\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/_contato.component.scss":
/***/ (function(module, exports) {

module.exports = ".home-contato {\n  float: left;\n  width: 100%; }\n  .home-contato .contact-left {\n    float: left;\n    height: 630px;\n    margin-left: auto;\n    margin-right: auto;\n    width: 55%;\n    background-color: #bbccd6; }\n  .home-contato .contact-left .parte1 {\n      float: left;\n      background-image: url(\"/assets/bg_left.png\");\n      background-position: right;\n      background-repeat: no-repeat;\n      height: 630px;\n      width: 100%; }\n  .home-contato .contact-center {\n    float: left;\n    width: 2%;\n    background-color: #adbac6;\n    height: 630px; }\n  .home-contato .contact-right {\n    float: left;\n    height: 630px;\n    margin-left: auto;\n    margin-right: auto;\n    width: 43%;\n    background-color: #adbac6; }\n  .home-contato .contact-right .parte2 {\n      float: left;\n      height: 630px;\n      width: 100%; }\n  .home-contato .contact-right .parte2 .titulo {\n        float: left;\n        height: 134px;\n        width: 450px;\n        margin-top: 60px; }\n  .home-contato .contact-right .parte2 .titulo h2 {\n          color: #1c8ad6;\n          font-weight: bold; }\n  .home-contato .contact-right .parte2 .titulo .subtitulo {\n          color: #3c3c3c;\n          font-size: 14px; }\n  .home-contato .contact-right .parte2 .formulario {\n        float: left;\n        width: 386px; }\n  .home-contato .contact-right .parte2 .formulario input, .home-contato .contact-right .parte2 .formulario textarea, .home-contato .contact-right .parte2 .formulario .k-maskedtextbox {\n          margin-bottom: 20px; }\n  .home-contato .contact-right .parte2 .voltar {\n        float: left;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end;\n        height: 308px;\n        margin-left: 50px;\n        width: 50px; }\n  .home-contato .contact-right .parte2 .voltar img {\n          cursor: pointer; }\n  .home-contato .validacao {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    width: 100%; }\n  .acao_02 {\n  font-weight: bold;\n  color: #167ac6; }\n  :host /deep/ .ng-invalid.ng-touched.k-maskedtextbox > .k-textbox, :host /deep/ .ng-invalid.ng-dirty.k-maskedtextbox > .k-textbox {\n  color: #3c3c3c;\n  border-color: inherit; }\n"

/***/ }),

/***/ "./src/app/components/home/_contato.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home_ContatoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db_service__ = __webpack_require__("./src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spinner_service__ = __webpack_require__("./src/app/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contato_class__ = __webpack_require__("./src/app/components/home/_contato.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Home_ContatoComponent = (function () {
    function Home_ContatoComponent(dbService, spinnerService) {
        this.dbService = dbService;
        this.spinnerService = spinnerService;
        this.item = new __WEBPACK_IMPORTED_MODULE_4__contato_class__["a" /* Contato */]();
        this.mask = "(00) 0000-00009";
        this.mensagemErro = '';
        this.showConfirmacao = false;
        this.showErro = false;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            nmContato: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            dsEmail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email]),
            nuTelefone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            dsMensagem: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
    }
    Home_ContatoComponent.prototype.fnEnviar = function () {
        var _this = this;
        // Valida formulário
        if (!this.form.valid) {
            // Exibe erros
            for (var ctrl in this.form.controls) {
                this.form.controls[ctrl].markAsTouched();
            }
            if (this.form.get('dsEmail').hasError('email') && !this.form.get('dsEmail').hasError('required')) {
                this.mensagemErro = 'E-mail inválido';
            }
            else {
                this.mensagemErro = 'Todos os campos são de preenchimento obrigatório';
            }
            this.showErro = true;
            this.showConfirmacao = false;
        }
        else {
            this.dbService.post('Contato', this.item).subscribe(function (result) {
                // Encerra spinner
                _this.spinnerService.stop();
                // Exibe notificação
                if (result.confirmacao === true) {
                    _this.showConfirmacao = true;
                    _this.item = new __WEBPACK_IMPORTED_MODULE_4__contato_class__["a" /* Contato */]();
                    _this.mask = "(00) 0000-00009";
                }
                _this.showErro = false;
            });
        }
    };
    Home_ContatoComponent.prototype.tbxTelefone_Blur = function () {
        if (this.item.nuTelefone.trim().length === 10) {
            this.item.nuTelefone += " ";
        }
    };
    Home_ContatoComponent.prototype.tbxTelefone_Changed = function () {
        if (this.item.nuTelefone.trim().length === 11) {
            this.mask = "(00) 00000-0009";
        }
        else {
            this.mask = "(00) 0000-00009";
        }
    };
    Home_ContatoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-contato',
            template: __webpack_require__("./src/app/components/home/_contato.component.html"),
            styles: [__webpack_require__("./src/app/components/home/_contato.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_3__spinner_service__["a" /* SpinnerService */]])
    ], Home_ContatoComponent);
    return Home_ContatoComponent;
}());



/***/ }),

/***/ "./src/app/components/home/_conteudos.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"home-conteudos\" class=\"home-conteudos\">\r\n    <div class=\"conteudos\">\r\n\r\n        <!-- CONTENT 01 -->\r\n        <div class=\"conteudo\">\r\n            <div class=\"imagem\" style=\"background-image: url('/assets/conteudos/negociacao_coletiva.png')\"></div>\r\n            <div class=\"detalhes\">\r\n                <div class=\"titulo\">NEGOCIAÇÃO COLETIVA GERAL</div>\r\n                <div class=\"descricao\">Confira os resultados das negociações de todos as convenções e acordos coletivos</div> \r\n            </div>\r\n            <div class=\"saiba-mais\">\r\n                <span [routerLink]=\"['/negociacao-coletiva-geral']\" class=\"btn-primary-outline\">\r\n                    Saiba Mais\r\n                </span>\r\n            </div> \r\n        </div>\r\n        <!-- / CONTENT 01 -->\r\n\r\n        <!-- CONTENT 02 -->\r\n        <div class=\"conteudo\">\r\n            <div class=\"imagem\" style=\"background-image: url('/assets/conteudos/indicadores_mercado.png')\"></div>\r\n            <div class=\"detalhes\">\r\n                <div class=\"titulo\">NEGOCIAÇÃO COLETIVA CUSTOMIZÁVEL</div>\r\n                <div class=\"descricao\">Confira os resultados das negociações ds convenções e acordos coletivos das empresas e associações do seu interesse</div>\r\n            </div>\r\n            <div class=\"saiba-mais\">\r\n                <span [routerLink]=\"['/negociacao-coletiva-customizavel']\" class=\"btn-primary-outline\">\r\n                    Saiba Mais\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <!-- / CONTENT 02 -->\r\n\r\n        <!-- CONTENT 03 -->\r\n        <div class=\"conteudo\" style=\"margin-left: 240px;\">\r\n            <div class=\"imagem\" style=\"background-image: url('/assets/conteudos/pesquisa_salarial.png')\"></div>\r\n            <div class=\"detalhes\">\r\n                <div class=\"titulo\">PESQUISA SALARIAL</div>\r\n                <div class=\"descricao\">Confira as faixas salariais de todas as ocupações da CBO – <br /> Classificação Brasileira de Ocupações</div>\r\n            </div>\r\n            <div class=\"saiba-mais\">\r\n                <span [routerLink]=\"['/pesquisa-salarial']\" class=\"btn-primary-outline\">\r\n                    Saiba Mais\r\n                </span>\r\n            </div> \r\n        </div>\r\n        <!-- / CONTENT 03 -->\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/_conteudos.component.scss":
/***/ (function(module, exports) {

module.exports = ".home-conteudos {\n  float: left;\n  width: 100%; }\n  .home-conteudos .conteudos {\n    width: 1149px;\n    margin-left: auto;\n    margin-right: auto; }\n  .home-conteudos .conteudos .conteudo {\n      float: left;\n      height: 270px;\n      padding-top: 30px;\n      width: 50%;\n      text-align: center;\n      -webkit-transition: 0.3s;\n      transition: 0.3s;\n      margin-left: auto;\n      margin-right: auto;\n      display: table;\n      position: relative;\n      margin-top: 15px; }\n  .home-conteudos .conteudos .conteudo .imagem {\n        float: left;\n        background-repeat: no-repeat;\n        background-position: center;\n        height: 60px;\n        width: 100%;\n        margin-top: 10px; }\n  .home-conteudos .conteudos .conteudo .detalhes {\n        float: left;\n        height: auto;\n        padding: 15px 15px 0px 15px;\n        width: 100%; }\n  .home-conteudos .conteudos .conteudo .detalhes .titulo {\n          float: left;\n          color: #20a1fa;\n          font-size: 15px;\n          font-weight: bold;\n          text-align: center;\n          width: 100%; }\n  .home-conteudos .conteudos .conteudo .detalhes .descricao {\n          float: left;\n          color: #3c3c3c;\n          font-size: 14px;\n          text-align: center;\n          width: 100%;\n          padding-top: 5px; }\n  .home-conteudos .conteudos .conteudo .saiba-mais {\n        float: left;\n        display: none;\n        margin-top: 10px;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        width: 100%; }\n  .home-conteudos .conteudos .conteudo .saiba-mais .btn-primary-outline {\n          opacity: 0;\n          border: 1px solid #20a1fa;\n          border-radius: 2px;\n          color: #20a1fa;\n          font-size: 14px;\n          padding: 5px 10px;\n          cursor: pointer;\n          width: 22%;\n          margin: 5px;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center; }\n  .home-conteudos .conteudos .conteudo .saiba-mais .btn-primary-outline:hover {\n          background-color: #20a1fa;\n          border-color: #20a1fa;\n          color: #fff !important; }\n  .home-conteudos .conteudos .conteudo:after {\n        content: \"\";\n        height: 0px;\n        width: 0px;\n        right: 10px;\n        bottom: 25px;\n        position: absolute;\n        -webkit-transition: .3s linear all;\n        transition: .3s linear all; }\n  .home-conteudos .conteudos .conteudo:before {\n        content: \"\";\n        height: 0px;\n        width: 0px;\n        top: 10px;\n        left: 10px;\n        position: absolute;\n        -webkit-transition: .3s linear all;\n        transition: .3s linear all; }\n  .home-conteudos .conteudos .conteudo:hover {\n      padding-top: 0px; }\n  .home-conteudos .conteudos .conteudo:hover:after {\n        height: 50px;\n        width: 100px;\n        border-bottom: 1px solid #20a1fa;\n        border-right: 1px solid #20a1fa; }\n  .home-conteudos .conteudos .conteudo:hover:before {\n        height: 50px;\n        width: 100px;\n        border-top: 1px solid #20a1fa;\n        border-left: 1px solid #20a1fa; }\n  .home-conteudos .conteudos .conteudo:hover .saiba-mais {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n  .home-conteudos .conteudos .conteudo:hover .saiba-mais .btn-primary-outline {\n          opacity: 1; }\n  .home-conteudos .conteudos .conteudo:nth-child(n+6) {\n      margin-top: 50px; }\n"

/***/ }),

/***/ "./src/app/components/home/_conteudos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home_ConteudosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Home_ConteudosComponent = (function () {
    function Home_ConteudosComponent() {
    }
    Home_ConteudosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-conteudos',
            template: __webpack_require__("./src/app/components/home/_conteudos.component.html"),
            styles: [__webpack_require__("./src/app/components/home/_conteudos.component.scss")]
        })
    ], Home_ConteudosComponent);
    return Home_ConteudosComponent;
}());



/***/ }),

/***/ "./src/app/components/home/_indicacao-amigo.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndicacaoAmigo; });
var IndicacaoAmigo = (function () {
    function IndicacaoAmigo() {
        this.nmRemetente = '';
        this.nmDestinatario = '';
        this.dsEmailDestinatario = '';
    }
    return IndicacaoAmigo;
}());



/***/ }),

/***/ "./src/app/components/home/_indicacao-amigo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-indicacao-amigo\">\n    <div class=\"indicacao-amigo\" [formGroup]=\"form\">\n\n        <!-- TITLE AND CONTENT -->\n        <div class=\"parte1\">\n            <h5>DIVULGUE ESSA INFORMAÇÃO</h5>\n            Preencha os campos ao lado e compartilhe a última edição do boletim mensal com seus amigos e colegas de trabalho\n        </div>\n        <!-- / TITLE AND CONTENT -->\n\n        <!-- SPACE -->\n        <div class=\"parte2\"></div>\n        <!-- / SPACE -->\n\n        <!-- SENDER -->\n        <div class=\"parte3\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Seu Nome\" maxlength=\"100\" [(ngModel)]=\"item.nmRemetente\" formControlName=\"nmRemetente\">\n            <div class=\"validacao\" *ngIf=\"form.get('nmRemetente').invalid && (form.get('nmRemetente').dirty || form.get('nmRemetente').touched)\">Campo obrigatório</div>\n        </div>\n        <!-- / SENDER -->\n\n        <!-- SPACE -->\n        <div class=\"parte4\"></div>\n        <!-- / SPACE -->\n\n        <!-- RECIPIENT -->\n        <div class=\"parte5\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Nome do Destinatário\" maxlength=\"100\" [(ngModel)]=\"item.nmDestinatario\"\n                formControlName=\"nmDestinatario\">\n            <div class=\"validacao\" *ngIf=\"form.get('nmDestinatario').invalid && (form.get('nmDestinatario').dirty || form.get('nmDestinatario').touched)\">Campo obrigatório</div>\n        </div>\n        <!-- / RECIPIENT -->\n\n        <!-- SPACE -->\n        <div class=\"parte6\"></div>\n        <!-- / SPACE -->\n\n        <!-- EMAIL -->\n        <div class=\"parte7\">\n            <input type=\"email\" class=\"form-control\" placeholder=\"E-mail do Destinatário\" maxlength=\"100\" [(ngModel)]=\"item.dsEmailDestinatario\"\n                formControlName=\"dsEmailDestinatario\">\n            <div class=\"validacao\" *ngIf=\"form.get('dsEmailDestinatario').invalid && form.get('dsEmailDestinatario').touched && (form.get('dsEmailDestinatario').errors | first_error) === 'required'\">Campo obrigatório</div>\n            <div class=\"validacao\" *ngIf=\"form.get('dsEmailDestinatario').invalid && form.get('dsEmailDestinatario').touched && (form.get('dsEmailDestinatario').errors | first_error) === 'email'\">E-mail inválido</div>\n        </div>\n        <!-- / EMAIL -->\n\n        <!-- BUTTONS -->\n        <div class=\"acao\">\n            <div class= \"acao_01\">\n                <button type=\"button\" class=\"btn btn-primary-confirm\" (click)=\"fnCadastrar()\">ENVIAR</button>\n            </div>\n            <div class=\"acao_02\" *ngIf=\"showConfirmacao === true\">Boletim enviado com sucesso!</div>\n            <div class=\"acao_02\" *ngIf=\"showErro === true\">E-mail já cadastrado para recebimento dos boletins</div>\n        </div>\n        <!-- / BUTTONS -->\n        \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/_indicacao-amigo.component.scss":
/***/ (function(module, exports) {

module.exports = ".home-indicacao-amigo {\n  float: left;\n  background-color: #ebf0f4;\n  margin-top: 50px;\n  width: 100%; }\n  .home-indicacao-amigo .indicacao-amigo {\n    color: #3c3c3c;\n    height: 180px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 40px 100px;\n    width: 1349px; }\n  .home-indicacao-amigo .indicacao-amigo .parte1 {\n      float: left;\n      font-size: 15px;\n      height: 100px;\n      width: 353px;\n      color: #3c3c3c; }\n  .home-indicacao-amigo .indicacao-amigo .parte1 h5 {\n        color: #20a1fa;\n        font-weight: bold; }\n  .home-indicacao-amigo .indicacao-amigo .parte2 {\n      float: left;\n      height: 100px;\n      width: 40px; }\n  .home-indicacao-amigo .indicacao-amigo .parte3 {\n      float: left;\n      height: 65px;\n      width: 220px; }\n  .home-indicacao-amigo .indicacao-amigo .parte4 {\n      float: left;\n      height: 65px;\n      width: 20px; }\n  .home-indicacao-amigo .indicacao-amigo .parte5 {\n      float: left;\n      height: 65px;\n      width: 220px; }\n  .home-indicacao-amigo .indicacao-amigo .parte6 {\n      float: left;\n      height: 65px;\n      width: 20px; }\n  .home-indicacao-amigo .indicacao-amigo .parte7 {\n      float: left;\n      height: 65px;\n      width: 275px; }\n  .home-indicacao-amigo .indicacao-amigo .acao {\n      float: left; }\n  .home-indicacao-amigo .indicacao-amigo .acao .acao_01 {\n        float: left; }\n  .home-indicacao-amigo .indicacao-amigo .acao .acao_02 {\n        float: left;\n        padding-top: 15px;\n        padding-left: 20px;\n        font-weight: bold;\n        color: #20a1fa; }\n"

/***/ }),

/***/ "./src/app/components/home/_indicacao-amigo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home_IndicacaoAmigoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__db_service__ = __webpack_require__("./src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spinner_service__ = __webpack_require__("./src/app/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__indicacao_amigo_class__ = __webpack_require__("./src/app/components/home/_indicacao-amigo.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Home_IndicacaoAmigoComponent = (function () {
    function Home_IndicacaoAmigoComponent(dbService, router, spinnerService) {
        this.dbService = dbService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.item = new __WEBPACK_IMPORTED_MODULE_5__indicacao_amigo_class__["a" /* IndicacaoAmigo */]();
        this.showConfirmacao = false;
        this.showErro = false;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            nmRemetente: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            nmDestinatario: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            dsEmailDestinatario: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email])
        });
    }
    Home_IndicacaoAmigoComponent.prototype.fnCadastrar = function () {
        var _this = this;
        this.showConfirmacao = false;
        this.showErro = false;
        // Valida formulário
        if (!this.form.valid) {
            // Exibe erros
            for (var ctrl in this.form.controls) {
                this.form.controls[ctrl].markAsTouched();
            }
        }
        else {
            this.dbService.post('IndicacaoAmigo', this.item).subscribe(function (result) {
                // Encerra spinner
                _this.spinnerService.stop();
                // Exibe notificação
                if (result.confirmacao === true) {
                    _this.form.reset();
                    _this.showConfirmacao = true;
                }
                else {
                    _this.showErro = true;
                }
            });
        }
    };
    Home_IndicacaoAmigoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-indicacao-amigo',
            template: __webpack_require__("./src/app/components/home/_indicacao-amigo.component.html"),
            styles: [__webpack_require__("./src/app/components/home/_indicacao-amigo.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__spinner_service__["a" /* SpinnerService */]])
    ], Home_IndicacaoAmigoComponent);
    return Home_IndicacaoAmigoComponent;
}());



/***/ }),

/***/ "./src/app/components/home/_noticias.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- TITLE -->\n<div class=\"titulo\">\n    <h2>NOTÍCIA EM DESTAQUE</h2>\n    <span class=\"subtitulo\">Acompanhe as principais notícias sobre o mercado de trabalho brasileiro</span>\n</div>\n<!-- / TITLE -->\n\n<div class=\"home-noticias\">\n    <div class=\"noticias\">\n        <carousel [interval]=\"20000\">\n            <slide class=\"animated fadeIn\" *ngFor=\"let noticia of lista_noticias\">\n                    \n                <!-- VIDEO -->\n                <div class=\"parte1\">\n                    <img [src]=\"noticia.urlImagem\" width=\"532\" height=\"300\">\n                </div>\n                <!-- / VIDEO -->\n\n                <!-- SPACE -->\n                <div class=\"parte2\"></div>\n                <!-- / SPACE -->\n\n                <!-- CONTENT -->\n                <div class=\"parte3\">\n                    <p class=\"data\">{{noticia.dtNoticia}}</p>\n                    <p class=\"titulo1\">{{noticia.dsTitulo}}</p>\n                    <p class=\"fonte\">Fonte: {{noticia.dsFonte}}</p>\n                    <p class=\"conteudo1\">{{noticia.dsDetalhes}}</p>\n                    <a [href]=\"noticia.dsLink\" target=\"_blank\">  \n                        <p class=\"leia_mais\">Leia mais <i class=\"fa fa-angle-right\"></i></p>\n                    </a>\n                </div>\n                <!-- / CONTENT -->\n        \n            </slide>\n        </carousel>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/_noticias.component.scss":
/***/ (function(module, exports) {

module.exports = ".titulo {\n  float: left;\n  margin-top: 50px;\n  text-align: center;\n  width: 100%; }\n  .titulo h2 {\n    color: #20a1fa;\n    font-weight: bold;\n    margin-bottom: 0px; }\n  .titulo .subtitulo {\n    color: #3c3c3c;\n    font-size: 14px; }\n  .home-noticias {\n  float: left;\n  width: 100%;\n  padding-bottom: 70px; }\n  .home-noticias .noticias {\n    height: 300px;\n    margin-top: 35px;\n    margin-left: auto;\n    margin-right: auto;\n    width: 1149px; }\n  .home-noticias .noticias .parte1 {\n      float: left;\n      height: 300px;\n      width: 532px; }\n  .home-noticias .noticias .parte2 {\n      float: left;\n      height: 300px;\n      width: calc(100% - 1107px); }\n  .home-noticias .noticias .parte3 {\n      float: left;\n      color: #3c3c3c;\n      font-size: 14px;\n      height: 300px;\n      text-align: justify;\n      width: 575px; }\n  .home-noticias .noticias .parte3 .data {\n        color: #3c3c3c;\n        font-size: 11px;\n        font-style: italic; }\n  .home-noticias .noticias .parte3 .titulo1 {\n        color: #3c3c3c;\n        font-weight: bold;\n        font-size: 16px; }\n  .home-noticias .noticias .parte3 .fonte {\n        color: #20a1fa;\n        font-size: 13px;\n        font-weight: bold;\n        margin-top: -10px; }\n  .home-noticias .noticias .parte3 .conteudo1 {\n        color: #3c3c3c;\n        font-size: 14px; }\n  .home-noticias .noticias .parte3 .leia_mais {\n        color: #20a1fa;\n        font-size: 12px;\n        text-transform: uppercase;\n        letter-spacing: 3px; }\n  :host /deep/ .carousel .left {\n  display: none; }\n  :host /deep/ .carousel .right {\n  display: none; }\n  :host /deep/ .carousel-indicators {\n  bottom: -16px;\n  right: 0;\n  left: unset;\n  margin-left: 0px;\n  margin-right: 0px; }\n  :host /deep/ .carousel-indicators li {\n  border: 1px solid #92a4b4;\n  border-radius: 50%;\n  width: 12px;\n  height: 12px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s; }\n  :host /deep/ .carousel-indicators .active {\n  background-color: #20a1fa;\n  border: 1px solid #20a1fa; }\n  .animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n  @-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n  @keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n  .fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn; }\n"

/***/ }),

/***/ "./src/app/components/home/_noticias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home_NoticiasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db_service__ = __webpack_require__("./src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner_service__ = __webpack_require__("./src/app/spinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Home_NoticiasComponent = (function () {
    function Home_NoticiasComponent(dbService, spinnerService) {
        this.dbService = dbService;
        this.spinnerService = spinnerService;
        this.lista_noticias = [];
        // Carrega lateral
        this.noticiasLoad();
    }
    Home_NoticiasComponent.prototype.noticiasLoad = function () {
        var _this = this;
        this.dbService.get('Noticia/GetUltimos3').subscribe(function (result) {
            // Encerra spinner
            _this.spinnerService.stop();
            // Guarda objetos
            _this.lista_noticias = result;
        });
    };
    Home_NoticiasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-noticias',
            template: __webpack_require__("./src/app/components/home/_noticias.component.html"),
            styles: [__webpack_require__("./src/app/components/home/_noticias.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_2__spinner_service__["a" /* SpinnerService */]])
    ], Home_NoticiasComponent);
    return Home_NoticiasComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div>\n        <app-home-banner></app-home-banner>\n        <app-home-conteudos></app-home-conteudos>\n        <app-home-assinatura></app-home-assinatura>\n        <app-home-boletins></app-home-boletins>\n        <app-home-indicacao-amigo></app-home-indicacao-amigo>\n        <!-- <app-home-noticias></app-home-noticias> -->\n        <app-home-contato></app-home-contato>\n\n        <!-- SessaoDupla -->\n        <kendo-dialog *ngIf=\"sessionService.sessaoDupla\" (close)=\"sessionService.sessaoDupla = false\" [height]=\"200\" [width]=\"800\">\n            <kendo-dialog-titlebar class=\"modal-titulo\">\n                <div class=\"alerta\"></div>\n                <h4>Aviso</h4>               \n            </kendo-dialog-titlebar>                      \n            <div class=\"txtAlerta\">Seu login está sendo usado em outro computador. Para continuar a consultar, encerre a sessão no outro computador e faça login novamente.</div>\n        </kendo-dialog>\n\n        <!-- MODAL Tempo Atualizações -->\n        <kendo-dialog *ngIf=\"sessionService.avisoAssinatura\" (close)=\"sessionService.avisoAssinatura = false\" [height]=\"175\"\n            [width]=\"799\">\n            <kendo-dialog-titlebar class=\"modal-titulo\">\n                <div class=\"alerta\"></div>\n                <h4>Aviso</h4>\n            </kendo-dialog-titlebar>\n            <div class=\"txtAlerta\">Para ter acesso às informações da Negociação Coletiva e da Pesquisa Salarial faça sua assinatura.<br>Consulte os planos disponíveis.</div>\n        </kendo-dialog>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ".alerta {\n  background-image: url(\"/assets/warning.png\");\n  background-repeat: no-repeat;\n  display: inline-block;\n  position: relative;\n  top: 5px;\n  height: 25px;\n  width: 25px; }\n\nh4 {\n  display: inline-block;\n  margin-left: 10px; }\n\n.k-window-titlebar {\n  background-color: #20a1fa;\n  color: white;\n  font-family: \"Arial\", \"Helvetica\", sans-serif; }\n\n.txtAlerta {\n  display: inline-block;\n  text-align: justify;\n  width: 765px; }\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__("./src/app/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(sessionService) {
        this.sessionService = sessionService;
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-root',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/indicadores-mercado/indicadores-mercado.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BANNER -->\r\n<div class=\"topo\">\r\n    <div class=\"topo-titulo\">INDICADORES DO MERCADO DE TRABALHO</div>\r\n    <div class=\"topo-nav\">\r\n        <nav aria-label=\"breadcrumb\">\r\n            <ol class=\"breadcrumb\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a [routerLink]=\"['/home']\">HOME</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">INDICADORES DO MERCADO DE TRABALHO</li>\r\n            </ol>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<!-- / BANNER -->\r\n\r\n<div class=\"content\">\r\n    <div class=\"app-nc-indicadores-mercado\">\r\n        <div class=\"formulario\">\r\n            <div class=\"col-12\">\r\n\r\n                <!-- TITLE AND CONTENT -->\r\n                <div class=\"titulo_pagina\">Informações sobre Indicadores do Mercado de Trabalho</div>\r\n                <div class=\"corpo_texto\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n                </div>\r\n                <!-- / TITLE AND CONTENT -->\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"lateral\">\r\n\r\n            <!-- LINKS LATERAL -->\r\n            <h4 class=\"lateral_titulo\">VEJA TAMBÉM</h4>\r\n            <div class=\"lateral_link\" [routerLink]=\"['/pesquisa-salarial']\">Pesquisa Salarial</div>\r\n            <!-- <div class=\"lateral_link fixo\" [routerLink]=\"['/indicadores-mercado']\">Indicadores do Mercado de Trabalho</div> -->\r\n            <div class=\"lateral_link\" [routerLink]=\"['/sobre/boletim']\">Boletim Mensal</div>\r\n            <!-- / LINKS LATERAL -->\r\n\r\n            <!-- CALL TO ACTION -->\r\n            <div class=\"lateral_caixa_azul\">\r\n                <h4 class=\"lateral_titulo_01\">Mais conteúdo para você</h4>\r\n                Tenha acesso aos conteúdos regionais e setoriais\r\n                <button type=\"button\" class=\"btn btn-primary\" style=\"margin-top: 10px\" [routerLink]=\"['/sobre/planos']\">PLANOS DE ASSINATURA</button>\r\n            </div>\r\n            <!-- / CALL TO ACTION -->\r\n\r\n            <!-- CONTACT -->\r\n            <div class=\"lateral_caixa_cinza\">\r\n                <h4 class=\"lateral_titulo_02\">Precisa de ajuda?</h4>\r\n                Para dúvidas ou sugestões, envie um e-mail para:\r\n                <br />\r\n                <b>salarios@fipe.org.br</b>\r\n            </div>\r\n            <!-- / CONTACT -->\r\n\r\n        </div>\r\n\r\n        <app-login-modal #login></app-login-modal>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/indicadores-mercado/indicadores-mercado.component.scss":
/***/ (function(module, exports) {

module.exports = ".topo {\n  background-image: url(\"/assets/topos/indicadores_mercado.png\"); }\n\n.app-nc-indicadores-mercado {\n  margin-left: auto;\n  margin-right: auto;\n  width: 1149px; }\n\n.app-nc-indicadores-mercado .formulario {\n    float: left;\n    padding-right: 40px;\n    width: calc(100% - 240px);\n    font-size: 14px;\n    margin-top: 30px; }\n\n.app-nc-indicadores-mercado .lateral {\n    float: left;\n    margin-top: 30px;\n    width: 240px; }\n"

/***/ }),

/***/ "./src/app/components/indicadores-mercado/indicadores-mercado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndicadoresMercadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IndicadoresMercadoComponent = (function () {
    function IndicadoresMercadoComponent() {
    }
    IndicadoresMercadoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-indicadores-mercado-root',
            template: __webpack_require__("./src/app/components/indicadores-mercado/indicadores-mercado.component.html"),
            styles: [__webpack_require__("./src/app/components/indicadores-mercado/indicadores-mercado.component.scss")]
        })
    ], IndicadoresMercadoComponent);
    return IndicadoresMercadoComponent;
}());



/***/ }),

/***/ "./src/app/components/negociacao-coletiva-customizavel/bloqueio-assinatura/bloqueio-assinatura.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"corpo_texto\">\r\n        <p>\r\n            Este produto utiliza os mesmos dados que alimentam a <a [routerLink]=\"['/negociacao-coletiva-geral']\" style=\"color: #33a9f4; font-weight: bold;\">Negociação Coletiva Geral</a> e\r\n            também pode ser adquirido por meio de um <a [routerLink]=\"['/sobre/planos']\" style=\"color: #33a9f4; font-weight: bold;\">Plano de Assinatura</a>. A diferença\r\n            está no nível de detalhamento das informações, que são apresentadas em\r\n            quatro conjuntos na mesma assinatura:\r\n        </p>\r\n\r\n        <table class=\"table custom-table\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"first-column\">Âmbito das negociações</th>\r\n                <th>Resultados disponibilizados</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td class=\"first-column\">Assinante</td>\r\n                <td>\r\n                    Negociações conduzidas\r\n                    pelo próprio assinante\r\n                    (empresa ou sindicato patronal)\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"first-column\">Mesmos sindicatos laborais</td>\r\n                <td>\r\n                    Negociações dos sindicatos laborais que\r\n                    representam os empregados do assinante, com\r\n                    outras empresas ou outros sindicatos patronais\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"first-column\">Referências empresariais</td>\r\n                <td>\r\n                    Negociações conduzidas por empresas ou \r\n                    sindicatos patronais de interesse do assinante\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"first-column\">Referências laborais</td>\r\n                <td>\r\n                    Negociações de outros sindicatos laborais de\r\n                    interesse do assinante\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <p>Para mais detalhes <a [routerLink]=\"['/sobre/quem-somos']\" style=\"color: #33a9f4; font-weight: bold;\">clique aqui</a></p>\r\n          \r\n    </div>\r\n<div>\r\n    <!-- <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>Âmbito das negociações</th>\r\n            <th>Resultados disponibilizados</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td style=\"width: 30%\">Assinante</td>\r\n            <td>Mesmos sindicatos laborais</td>\r\n            <td>Referências empresariais</td>\r\n            <td>Referências laborais</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Negociações conduzidas <br />\r\n                 pelo próprio assinante<br />\r\n                (empresa ou sindicato patronal)\r\n            </td>\r\n            <td>Negociações dos sindicatos laborais que<br />\r\n                representam os empregados do assinante, com<br />\r\n                outras empresas ou outros sindicatos patronais\r\n            </td>\r\n            <td>Negociações conduzidas por empresas ou <br />\r\n                sindicatos patronais de interesse do assinante\r\n            </td>\r\n            <td>\r\n                Negociações de outros sindicatos laborais de<br />\r\n                interesse do assinante\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table> -->\r\n\r\n</div>\r\n    <br />\r\n    <br />\r\n<div class=\"MensagemNulo\">\r\n    <div class=\"retorno_pesquisa\">Assinatura requerida</div>\r\n    Você deve possuir uma assinatura para acessar o conteúdo.<br/>\r\n    Por favor, faça a autenticação no site ou contrate um dos nossos planos.<br/>\r\n    Se já estiver autenticado, certifique-se de que contratou o produto selecionados.\r\n</div>"

/***/ }),

/***/ "./src/app/components/negociacao-coletiva-customizavel/bloqueio-assinatura/bloqueio-assinatura.component.scss":
/***/ (function(module, exports) {

module.exports = ".MensagemNulo {\n  padding-top: 1em; }\n\n.first-column {\n  width: 30%; }\n\n.custom-table {\n  width: 80%; }\n"

/***/ }),

/***/ "./src/app/components/negociacao-coletiva-customizavel/bloqueio-assinatura/bloqueio-assinatura.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegociacaoColetivaNewBloqueioAssinaturaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NegociacaoColetivaNewBloqueioAssinaturaComponent = (function () {
    function NegociacaoColetivaNewBloqueioAssinaturaComponent() {
    }
    NegociacaoColetivaNewBloqueioAssinaturaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-negociacao-coletiva-customizavel-bloqueio-assinatura',
            template: __webpack_require__("./src/app/components/negociacao-coletiva-customizavel/bloqueio-assinatura/bloqueio-assinatura.component.html"),
            styles: [__webpack_require__("./src/app/components/negociacao-coletiva-customizavel/bloqueio-assinatura/bloqueio-assinatura.component.scss")]
        })
    ], NegociacaoColetivaNewBloqueioAssinaturaComponent);
    return NegociacaoColetivaNewBloqueioAssinaturaComponent;
}());



/***/ }),

/***/ "./src/app/components/negociacao-coletiva-customizavel/negociacao-coletiva-customizavel.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BANNER -->\r\n<div class=\"topo\">\r\n    <div class=\"topo-titulo\">RELATÓRIO DE NEGOCIAÇÃO COLETIVA CUSTOMIZÁVEL</div>\r\n    <div class=\"topo-nav\">\r\n        <nav aria-label=\"breadcrumb\">\r\n            <ol class=\"breadcrumb\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a [routerLink]=\"['/home']\">HOME</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">NEGOCIAÇÃO COLETIVA CUSTOMIZÁVEL</li>\r\n            </ol>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<!-- / BANNER -->\r\n\r\n<div class=\"content\">\r\n    <div class=\"app-negociacao-coletiva-customizavel\">\r\n        <div class=\"formulario\">\r\n            \r\n            <!-- TITLE AND CONTENT -->\r\n            <div class=\"col-12\">\r\n                <div class=\"titulo_pagina\">Negociação Coletiva Customizável</div>\r\n                <div class=\"corpo_texto\">\r\n                    \r\n                </div>\r\n            </div>            \r\n            <!-- / TITLE AND CONTENT -->\r\n            <div class=\"col-12\" *ngIf=\"!showBloqueio\">\r\n                <button class=\"btn btn-secondary\" (click)=\"fullscreen()\" *ngIf=\"!showBloqueio\">[ + ]</button><br />\r\n                <div #embeddedReport style=\"width:1150px; height:700px; border-style:hidden;\"></div>\r\n            </div>\r\n            <app-negociacao-coletiva-customizavel-bloqueio-assinatura *ngIf=\"showBloqueio\"></app-negociacao-coletiva-customizavel-bloqueio-assinatura>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/negociacao-coletiva-customizavel/negociacao-coletiva-customizavel.component.scss":
/***/ (function(module, exports) {

module.exports = ".topo {\n  background-image: url(\"/assets/topos/pesquisa_salarial.png\"); }\n\n.app-negociacao-coletiva-customizavel {\n  margin-left: auto;\n  margin-right: auto;\n  width: 1149px; }\n\n.app-negociacao-coletiva-customizavel .formulario {\n    float: left;\n    padding-right: 20px;\n    width: calc(100% - 240px);\n    margin-top: 20px;\n    margin-bottom: 80px; }\n\n.app-negociacao-coletiva-customizavel .formulario .titulo {\n      font-size: 16px;\n      color: #fff;\n      text-align: left;\n      background-image: url(/assets/table_header.png);\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-bottom: 25px; }\n\n.app-negociacao-coletiva-customizavel .formulario .titulo_faixaescola {\n      font-size: 14px;\n      color: #fff;\n      text-align: left;\n      background-image: url(/assets/table_header.png);\n      padding-left: 10px;\n      padding-right: 10px;\n      padding-bottom: 15px; }\n\n.app-negociacao-coletiva-customizavel .lateral {\n    float: left;\n    margin-top: 25px;\n    width: 240px; }\n\n.validacao {\n  padding-left: 15px; }\n\n.pesqsalarial-label {\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n  font-size: 16px;\n  color: #2C2929;\n  text-align: left;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 5px; }\n\niframe {\n  border: none; }\n"

/***/ }),

/***/ "./src/app/components/negociacao-coletiva-customizavel/negociacao-coletiva-customizavel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegociacaoColetivaNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_login_app_login_component__ = __webpack_require__("./src/app/components/app-login/app-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db_service__ = __webpack_require__("./src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spinner_service__ = __webpack_require__("./src/app/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NegociacaoColetivaNewComponent = (function () {
    function NegociacaoColetivaNewComponent(_scrollToService, dbService, sessionService, spinnerService) {
        this._scrollToService = _scrollToService;
        this.dbService = dbService;
        this.sessionService = sessionService;
        this.spinnerService = spinnerService;
        this.showBloqueio = false;
        this.fnPesquisar();
    }
    NegociacaoColetivaNewComponent.prototype.fnPesquisar = function () {
        var _this = this;
        var sessao = JSON.parse(sessionStorage.getItem('sessao_usuario') || '{}');
        if (sessao.idUsuario == 148) {
            this.dbService.get('EmbedInfo/GetNegociacaoColetivaCustomizada').subscribe(function (result) {
                var pages = [];
                var model = window['powerbi-client'].models;
                _this.config = result;
                var embedConfig = {
                    type: 'report',
                    tokenType: model.TokenType.Embed,
                    accessToken: result.embedToken.token,
                    embedUrl: result.embedReport[0].embedUrl,
                    permissions: model.Permissions.All,
                    settings: {
                        filterPaneEnabled: false,
                        navContentPaneEnabled: false,
                        layoutType: model.LayoutType.Custom,
                        customLayout: {
                            displayOption: model.DisplayOption.FitToWidth
                        }
                    }
                };
                var report = powerbi.embed(_this.embeddedReport.nativeElement, embedConfig);
                report.fullscreen();
            });
        }
        else {
            this.dbService.post('EmbedInfo/VerificaPermissaoNCP', sessao.hash).subscribe(function (resultPersonalizado) {
                if (!resultPersonalizado.permissao) {
                    //Retirar e habilitar o trecho abaixo caso todas as negociações coletivas fiquem no mesmo menu
                    _this.fnScrollTo();
                    _this.showBloqueio = true;
                }
                else {
                    _this.dbService.get('EmbedInfo/GetNegociacaoColetivaCustomizada').subscribe(function (result) {
                        var pages = [];
                        var model = window['powerbi-client'].models;
                        var basicFilter = {
                            $schema: "http://powerbi.com/product/schema#basic",
                            target: {
                                table: "Planilha1",
                                column: "IdCliente"
                            },
                            operator: "In",
                            values: [sessao.idUsuario],
                            filterType: model.FilterType.BasicFilter,
                        };
                        _this.config = result;
                        var embedConfig = {
                            type: 'report',
                            tokenType: model.TokenType.Embed,
                            accessToken: result.embedToken.token,
                            embedUrl: result.embedReport[0].embedUrl,
                            permissions: model.Permissions.All,
                            filters: [basicFilter],
                            settings: {
                                filterPaneEnabled: false,
                                navContentPaneEnabled: false,
                                layoutType: model.LayoutType.Custom,
                                customLayout: {
                                    displayOption: model.DisplayOption.FitToWidth
                                }
                            }
                        };
                        var report = powerbi.embed(_this.embeddedReport.nativeElement, embedConfig);
                        report.fullscreen();
                    });
                }
            });
        }
    };
    NegociacaoColetivaNewComponent.prototype.fullscreen = function () {
        // Get a reference to the embedded report HTML element
        var embedContainer = this.embeddedReport.nativeElement;
        // Get a reference to the embedded report.
        var report = powerbi.get(embedContainer);
        // Displays the report in full screen mode.
        report.fullscreen();
    };
    NegociacaoColetivaNewComponent.prototype.fnScrollTo = function () {
        var config = {
            target: 'resultado',
            offset: -97
        };
        this._scrollToService.scrollTo(config);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("login"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__app_login_app_login_component__["a" /* AppLoginModalComponent */])
    ], NegociacaoColetivaNewComponent.prototype, "login", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('embeddedReport'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], NegociacaoColetivaNewComponent.prototype, "embeddedReport", void 0);
    NegociacaoColetivaNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-negociacao-coletiva-customizavel',
            template: __webpack_require__("./src/app/components/negociacao-coletiva-customizavel/negociacao-coletiva-customizavel.component.html"),
            styles: [__webpack_require__("./src/app/components/negociacao-coletiva-customizavel/negociacao-coletiva-customizavel.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__nicky_lenaers_ngx_scroll_to__["b" /* ScrollToService */],
            __WEBPACK_IMPORTED_MODULE_2__db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_3__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_4__spinner_service__["a" /* SpinnerService */]])
    ], NegociacaoColetivaNewComponent);
    return NegociacaoColetivaNewComponent;
}());



/***/ }),

/***/ "./src/app/components/negociacao-coletiva-geral-demo/negociacao-coletiva-geral-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BANNER -->\r\n<div class=\"topo\">\r\n    <div class=\"topo-titulo\">RELATÓRIO DE NEGOCIAÇÃO COLETIVA GERAL - DEMOSTRAÇÃO</div>\r\n    <div class=\"topo-nav\">\r\n        <nav aria-label=\"breadcrumb\">\r\n            <ol class=\"breadcrumb\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a [routerLink]=\"['/home']\">HOME</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">NEGOCIAÇÃO COLETIVA GERAL - DEMOSTRAÇÃO</li>\r\n            </ol>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<!-- / BANNER -->\r\n\r\n<div class=\"content\">\r\n    <div class=\"app-negociacao-coletiva-geral-demo\">\r\n        <div class=\"formulario\">\r\n            \r\n            <!-- TITLE AND CONTENT -->\r\n            <div class=\"col-12\">\r\n                <div class=\"titulo_pagina\">Negociação Coletiva Geral - Demonstração</div>\r\n            </div>   \r\n            <div>\r\n                <div style=\"width:1150px; border-style:hidden;\">\r\n                    <p>\r\n                        A demonstração da Negociação Coletiva Geral contêm os resultados de todos os instrumentos coletivos com início de vigência no ano de 2018. \r\n                        Se você a adquirir assinatura completa, verá estes mesmos resultados, cobrindo todas as unidades da federação e todas as atividades, atualizados para os instrumentos vigentes nos últimos 12 meses.\r\n                    </p>\r\n                    <p>\r\n                        Caso prefira, poderá fazer uma assinatura de menor âmbito, escolhendo algumas unidades da federação e/ou algumas atividades, também vigentes nos últimos 12 meses.\r\n                        Para todas as assinaturas, as telas apresentam os resultados em telas do Power BI, que permitem criar filtros para combinar as desagregações desejadas.\r\n                        Tenha uma boa demonstração! Em caso de dúvida, entre em contato e teremos prazer em ajudar e esclarecer.\r\n                    </p>\r\n                </div>\r\n            </div>         \r\n            <!-- / TITLE AND CONTENT -->\r\n            <div class=\"col-12\" *ngIf=\"!showBloqueio\">\r\n                <button class=\"btn btn-secondary\" (click)=\"fullscreen()\" *ngIf=\"!showBloqueio\">[ + ]</button><br />\r\n                <div #embeddedReport style=\"width:1150px; height:700px; border-style:hidden;\" *ngIf=\"!showBloqueio\"></div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/negociacao-coletiva-geral-demo/negociacao-coletiva-geral-demo.component.scss":
/***/ (function(module, exports) {

module.exports = ".topo {\n  background-image: url(\"/assets/topos/pesquisa_salarial.png\"); }\n\n.app-negociacao-coletiva-geral-demo {\n  margin-left: auto;\n  margin-right: auto;\n  width: 1149px; }\n\n.app-negociacao-coletiva-geral-demo .formulario {\n    float: left;\n    padding-right: 20px;\n    width: calc(100% - 240px);\n    margin-top: 20px;\n    margin-bottom: 80px; }\n\n.app-negociacao-coletiva-geral-demo .formulario .titulo {\n      font-size: 16px;\n      color: #fff;\n      text-align: left;\n      background-image: url(/assets/table_header.png);\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-bottom: 25px; }\n\n.app-negociacao-coletiva-geral-demo .formulario .titulo_faixaescola {\n      font-size: 14px;\n      color: #fff;\n      text-align: left;\n      background-image: url(/assets/table_header.png);\n      padding-left: 10px;\n      padding-right: 10px;\n      padding-bottom: 15px; }\n\n.app-negociacao-coletiva-geral-demo .lateral {\n    float: left;\n    margin-top: 25px;\n    width: 240px; }\n\n.validacao {\n  padding-left: 15px; }\n\n.pesqsalarial-label {\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n  font-size: 16px;\n  color: #2C2929;\n  text-align: left;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 5px; }\n\niframe {\n  border: none; }\n"

/***/ }),

/***/ "./src/app/components/negociacao-coletiva-geral-demo/negociacao-coletiva-geral-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegociacaoColetivaDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_login_app_login_component__ = __webpack_require__("./src/app/components/app-login/app-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db_service__ = __webpack_require__("./src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spinner_service__ = __webpack_require__("./src/app/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NegociacaoColetivaDemoComponent = (function () {
    function NegociacaoColetivaDemoComponent(_scrollToService, dbService, sessionService, spinnerService) {
        this._scrollToService = _scrollToService;
        this.dbService = dbService;
        this.sessionService = sessionService;
        this.spinnerService = spinnerService;
        this.showBloqueio = false;
        this.fnPesquisar();
    }
    NegociacaoColetivaDemoComponent.prototype.fnPesquisar = function () {
        var _this = this;
        var sessao = JSON.parse(sessionStorage.getItem('sessao_usuario') || '{}');
        //this.dbService.post('EmbedInfo/VerificaPermissaoNCP', sessao.hash).subscribe(resultPersonalizado => {
        // if (!resultPersonalizado.permissao)
        // {
        this.dbService.get('EmbedInfo/GetNegociacaoColetivaDemo').subscribe(function (result) {
            var pages = [];
            var model = window['powerbi-client'].models;
            _this.config = result;
            var embedConfig = {
                type: 'report',
                tokenType: model.TokenType.Embed,
                accessToken: result.embedToken.token,
                embedUrl: result.embedReport[0].embedUrl,
                permissions: model.Permissions.All,
                settings: {
                    filterPaneEnabled: false,
                    navContentPaneEnabled: false,
                    layoutType: model.LayoutType.Custom,
                    customLayout: {
                        displayOption: model.DisplayOption.FitToWidth
                    }
                }
            };
            var report = powerbi.embed(_this.embeddedReport.nativeElement, embedConfig);
            //report.fullscreen();
        });
    };
    NegociacaoColetivaDemoComponent.prototype.fullscreen = function () {
        // Get a reference to the embedded report HTML element
        var embedContainer = this.embeddedReport.nativeElement;
        // Get a reference to the embedded report.
        var report = powerbi.get(embedContainer);
        // Displays the report in full screen mode.
        report.fullscreen();
    };
    NegociacaoColetivaDemoComponent.prototype.fnScrollTo = function () {
        var config = {
            target: 'resultado',
            offset: -97
        };
        this._scrollToService.scrollTo(config);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("login"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__app_login_app_login_component__["a" /* AppLoginModalComponent */])
    ], NegociacaoColetivaDemoComponent.prototype, "login", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('embeddedReport'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], NegociacaoColetivaDemoComponent.prototype, "embeddedReport", void 0);
    NegociacaoColetivaDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-negociacao-coletiva-geral-demo',
            template: __webpack_require__("./src/app/components/negociacao-coletiva-geral-demo/negociacao-coletiva-geral-demo.component.html"),
            styles: [__webpack_require__("./src/app/components/negociacao-coletiva-geral-demo/negociacao-coletiva-geral-demo.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__nicky_lenaers_ngx_scroll_to__["b" /* ScrollToService */],
            __WEBPACK_IMPORTED_MODULE_2__db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_3__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_4__spinner_service__["a" /* SpinnerService */]])
    ], NegociacaoColetivaDemoComponent);
    return NegociacaoColetivaDemoComponent;
}());



/***/ }),

/***/ "./src/app/components/negociacao-coletiva-geral/bloqueio-assinatura/bloqueio-assinatura.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"corpo_texto\">\r\n    <p>\r\n        Quando a negociação coletiva é concluída, as partes envolvidas enviam o texto\r\n        final ao Ministério do Trabalho e Emprego, para validação e publicação na\r\n        página denominada <a href=\"http://www3.mte.gov.br/sistemas/mediador/\" target=\"_blank\"style=\"font-weight: bold; color: #33a9f4;\">Mediador</a>. Uma vez publicado, o instrumento negociado\r\n        torna-se um documento público, ao qual qualquer cidadão pode ter acesso.\r\n        A Fipe baixa diariamente os novos instrumentos em seus servidores e nossa\r\n        equipe técnica extrai e tabula os conteúdos de 40 tipos de cláusulas,\r\n        transformando-os em informações quantitativas com as quais alimenta e\r\n        atualiza o banco de dados dos resultados da negociação.\r\n        A página Salariômetro oferece assinaturas que dão acesso ao conjunto\r\n        completo de resultados tabulados. Os interessados podem selecionar\r\n        resultados desagregados espacialmente (por UF), por setor e por atividade que\r\n        lhes são disponibilizados por meio de um <a [routerLink]=\"['/sobre/planos']\" style=\"color: #33a9f4; font-weight: bold;\">Plano de Assinatura</a>.\r\n    </p>\r\n</div>\r\n<br />\r\n<br />\r\n<div class=\"MensagemNulo\">\r\n    <div class=\"retorno_pesquisa\">Assinatura requerida</div>\r\n    Você deve possuir uma assinatura para acessar o conteúdo.<br/>\r\n    Por favor, faça a autenticação no site ou contrate um dos nossos planos.<br/>\r\n    Se já estiver autenticado, certifique-se de que contratou o produto selecionados.\r\n    <br />\r\n    <p style=\"font-size: 18px;\"><strong>Veja uma <a [routerLink]=\"['/negociacao-coletiva-geral-demo']\" style=\"color: #33a9f4; font-weight: bold;\">demonstração</a> com nossos dados de 2018.</strong></p>\r\n</div>"

/***/ }),

/***/ "./src/app/components/negociacao-coletiva-geral/bloqueio-assinatura/bloqueio-assinatura.component.scss":
/***/ (function(module, exports) {

module.exports = ".MensagemNulo {\n  padding-top: 1em; }\n"

/***/ }),

/***/ "./src/app/components/negociacao-coletiva-geral/bloqueio-assinatura/bloqueio-assinatura.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegociacaoColetivaBloqueioAssinaturaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NegociacaoColetivaBloqueioAssinaturaComponent = (function () {
    function NegociacaoColetivaBloqueioAssinaturaComponent() {
    }
    NegociacaoColetivaBloqueioAssinaturaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-negociacao-coletiva-geral-bloqueio-assinatura',
            template: __webpack_require__("./src/app/components/negociacao-coletiva-geral/bloqueio-assinatura/bloqueio-assinatura.component.html"),
            styles: [__webpack_require__("./src/app/components/negociacao-coletiva-geral/bloqueio-assinatura/bloqueio-assinatura.component.scss")]
        })
    ], NegociacaoColetivaBloqueioAssinaturaComponent);
    return NegociacaoColetivaBloqueioAssinaturaComponent;
}());



/***/ }),

/***/ "./src/app/components/negociacao-coletiva-geral/negociacao-coletiva-geral.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BANNER -->\r\n<div class=\"topo\">\r\n    <div class=\"topo-titulo\">RELATÓRIO DE NEGOCIAÇÃO COLETIVA GERAL</div>\r\n    <div class=\"topo-nav\">\r\n        <nav aria-label=\"breadcrumb\">\r\n            <ol class=\"breadcrumb\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a [routerLink]=\"['/home']\">HOME</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">NEGOCIAÇÃO COLETIVA GERAL</li>\r\n            </ol>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<!-- / BANNER -->\r\n\r\n<div class=\"content\">\r\n    <div class=\"app-negociacao-coletiva-geral\">\r\n        <div class=\"formulario\">\r\n            \r\n            <!-- TITLE AND CONTENT -->\r\n            <div class=\"col-12\">\r\n                <div class=\"titulo_pagina\">Negociação Coletiva Geral</div>\r\n                <div class=\"corpo_texto\">\r\n                    \r\n                </div>\r\n            </div>            \r\n            <!-- / TITLE AND CONTENT -->\r\n            <div class=\"col-12\" *ngIf=\"!showBloqueio\">\r\n                <button class=\"btn btn-secondary\" (click)=\"fullscreen()\" *ngIf=\"!showBloqueio\">[ + ]</button><br />\r\n                <div #embeddedReport style=\"width:1150px; height:700px; border-style:hidden;\"></div>\r\n            </div>\r\n            <app-negociacao-coletiva-geral-bloqueio-assinatura *ngIf=\"showBloqueio\"></app-negociacao-coletiva-geral-bloqueio-assinatura>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/negociacao-coletiva-geral/negociacao-coletiva-geral.component.scss":
/***/ (function(module, exports) {

module.exports = ".topo {\n  background-image: url(\"/assets/topos/pesquisa_salarial.png\"); }\n\n.app-negociacao-coletiva-geral {\n  margin-left: auto;\n  margin-right: auto;\n  width: 1149px; }\n\n.app-negociacao-coletiva-geral .formulario {\n    float: left;\n    padding-right: 20px;\n    width: calc(100% - 240px);\n    margin-top: 20px;\n    margin-bottom: 80px; }\n\n.app-negociacao-coletiva-geral .formulario .titulo {\n      font-size: 16px;\n      color: #fff;\n      text-align: left;\n      background-image: url(/assets/table_header.png);\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-bottom: 25px; }\n\n.app-negociacao-coletiva-geral .formulario .titulo_faixaescola {\n      font-size: 14px;\n      color: #fff;\n      text-align: left;\n      background-image: url(/assets/table_header.png);\n      padding-left: 10px;\n      padding-right: 10px;\n      padding-bottom: 15px; }\n\n.app-negociacao-coletiva-geral .lateral {\n    float: left;\n    margin-top: 25px;\n    width: 240px; }\n\n.validacao {\n  padding-left: 15px; }\n\n.pesqsalarial-label {\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n  font-size: 16px;\n  color: #2C2929;\n  text-align: left;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 5px; }\n\niframe {\n  border: none; }\n"

/***/ }),

/***/ "./src/app/components/negociacao-coletiva-geral/negociacao-coletiva-geral.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegociacaoColetivaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_login_app_login_component__ = __webpack_require__("./src/app/components/app-login/app-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db_service__ = __webpack_require__("./src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spinner_service__ = __webpack_require__("./src/app/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NegociacaoColetivaComponent = (function () {
    function NegociacaoColetivaComponent(_scrollToService, dbService, sessionService, spinnerService) {
        this._scrollToService = _scrollToService;
        this.dbService = dbService;
        this.sessionService = sessionService;
        this.spinnerService = spinnerService;
        this.showBloqueio = false;
        this.fnPesquisar();
    }
    NegociacaoColetivaComponent.prototype.fnPesquisar = function () {
        var _this = this;
        var sessao = JSON.parse(sessionStorage.getItem('sessao_usuario') || '{}');
        //this.dbService.post('EmbedInfo/VerificaPermissaoNCP', sessao.hash).subscribe(resultPersonalizado => {
        // if (!resultPersonalizado.permissao)
        // {
        this.dbService.post('EmbedInfo/VerificaPermissaoNC', sessao.hash).subscribe(function (resultComum) {
            if (!resultComum.permissao) {
                _this.fnScrollTo();
                _this.showBloqueio = true;
            }
            else {
                _this.dbService.get('EmbedInfo/GetNegociacaoColetiva').subscribe(function (result) {
                    var pages = [];
                    var model = window['powerbi-client'].models;
                    var basicFilter = {
                        $schema: "http://powerbi.com/product/schema#basic",
                        target: {
                            table: "VW_ASSINATURAS_ATIVAS_NC",
                            column: "IdCliente"
                        },
                        operator: "In",
                        values: [sessao.idUsuario],
                        filterType: model.FilterType.BasicFilter,
                    };
                    _this.config = result;
                    var embedConfig = {
                        type: 'report',
                        tokenType: model.TokenType.Embed,
                        accessToken: result.embedToken.token,
                        embedUrl: result.embedReport[0].embedUrl,
                        permissions: model.Permissions.All,
                        filters: [basicFilter],
                        settings: {
                            filterPaneEnabled: false,
                            navContentPaneEnabled: false,
                            layoutType: model.LayoutType.Custom,
                            customLayout: {
                                displayOption: model.DisplayOption.FitToWidth
                            }
                        }
                    };
                    var report = powerbi.embed(_this.embeddedReport.nativeElement, embedConfig);
                    report.fullscreen();
                });
            }
        });
    };
    NegociacaoColetivaComponent.prototype.fullscreen = function () {
        // Get a reference to the embedded report HTML element
        var embedContainer = this.embeddedReport.nativeElement;
        // Get a reference to the embedded report.
        var report = powerbi.get(embedContainer);
        // Displays the report in full screen mode.
        report.fullscreen();
    };
    NegociacaoColetivaComponent.prototype.fnScrollTo = function () {
        var config = {
            target: 'resultado',
            offset: -97
        };
        this._scrollToService.scrollTo(config);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("login"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__app_login_app_login_component__["a" /* AppLoginModalComponent */])
    ], NegociacaoColetivaComponent.prototype, "login", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('embeddedReport'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], NegociacaoColetivaComponent.prototype, "embeddedReport", void 0);
    NegociacaoColetivaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-negociacao-coletiva-geral',
            template: __webpack_require__("./src/app/components/negociacao-coletiva-geral/negociacao-coletiva-geral.component.html"),
            styles: [__webpack_require__("./src/app/components/negociacao-coletiva-geral/negociacao-coletiva-geral.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__nicky_lenaers_ngx_scroll_to__["b" /* ScrollToService */],
            __WEBPACK_IMPORTED_MODULE_2__db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_3__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_4__spinner_service__["a" /* SpinnerService */]])
    ], NegociacaoColetivaComponent);
    return NegociacaoColetivaComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found-404/not-found-404.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BANNER -->\n<div class=\"topo\">\n    <div class=\"topo-titulo\">ERRO 404</div>\n    <div class=\"topo-nav\">\n        <nav aria-label=\"breadcrumb\">\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">PÁGINA NÃO ENCONTRADA</li>\n            </ol>\n        </nav>\n    </div>\n</div>\n    <!-- / BANNER -->\n\n<div class=\"page-404\">\n\n    <!-- PAGE NOT FOUND -->\n    <div class=\"info\">\n        <div class=\"not-found\">\n                Ops! Página não encontrada.\n        </div>\n        <div class=\"back-home\">\n                A página que você está procurando não pôde ser encontrada. \n                <br />\n                Clique no botão abaixo para retornar à página inicial.\n        </div>\n    </div>\n    <!-- / PAGE NOT FOUND -->\n\n    <!-- BACK HOME -->\n    <div class=\"btn-home\">\n        <div class=\"btn-primary-outline\">\n            <a [routerLink]=\"['/home']\">Home</a>\n        </div>\n    </div>\n    <!-- / BACK HOME -->\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/not-found-404/not-found-404.component.scss":
/***/ (function(module, exports) {

module.exports = ".topo {\n  background-image: url(\"/assets/topos/banner_404.png\"); }\n\n.page-404 {\n  float: left;\n  background-image: url(\"/assets/bg_404.png\");\n  background-repeat: repeat;\n  height: 350px;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.info {\n  width: 1149px;\n  padding-top: 50px; }\n\n.info {\n  width: 100%;\n  height: 230px; }\n\n.not-found {\n  color: #3c3c3c;\n  text-align: center;\n  font-size: 60px;\n  float: left;\n  width: 100%;\n  font-family: \"Cardo\";\n  font-weight: bold; }\n\n.back-home {\n  color: #3c3c3c;\n  text-align: center;\n  font-size: 20px;\n  float: left;\n  width: 100%; }\n\n.btn-home {\n  float: left;\n  width: 100%; }\n\n.btn-primary-outline {\n  margin: auto;\n  border: 1px solid #20a1fa;\n  border-radius: 2px;\n  color: #20a1fa;\n  font-size: 14px;\n  padding: 5px 10px;\n  cursor: pointer;\n  width: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #fff; }\n\n.btn-primary-outline:hover {\n  background-color: #20a1fa;\n  border-color: #20a1fa;\n  color: #fff !important; }\n"

/***/ }),

/***/ "./src/app/components/not-found-404/not-found-404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFound404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFound404Component = (function () {
    function NotFound404Component() {
    }
    NotFound404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found-404',
            template: __webpack_require__("./src/app/components/not-found-404/not-found-404.component.html"),
            styles: [__webpack_require__("./src/app/components/not-found-404/not-found-404.component.scss")]
        })
    ], NotFound404Component);
    return NotFound404Component;
}());



/***/ }),

/***/ "./src/app/components/perfil-contratados/filtro.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filtro; });
var Filtro = (function () {
    function Filtro() {
        this.cdCbo = null;
        this.cdUf = null;
        this.cdFaixaEtaria = null;
        this.cdGenero = null;
        this.cdCor = null;
        this.cdEscolaridade = null;
    }
    return Filtro;
}());



/***/ }),

/***/ "./src/app/components/perfil-contratados/perfil-contratados.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilContratados; });
var PerfilContratados = (function () {
    function PerfilContratados() {
    }
    return PerfilContratados;
}());



/***/ }),

/***/ "./src/app/components/perfil-contratados/perfil-contratados.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BANNER -->\r\n<div class=\"topo\">\r\n    <div class=\"topo-titulo\">PERFIL DOS CONTRATADOS</div>\r\n    <div class=\"topo-nav\">\r\n        <nav aria-label=\"breadcrumb\">\r\n            <ol class=\"breadcrumb\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a [routerLink]=\"['/home']\">HOME</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">PERFIL DOS CONTRATADOS</li>\r\n            </ol>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<!-- / BANNER -->\r\n\r\n<div class=\"content\">\r\n    <div class=\"app-nc-perfil-contratados\">\r\n        <div class=\"formulario\" [formGroup]=\"form\">\r\n\r\n            <!-- TITLE AND CONTENT -->\r\n            <div class=\"col-12\">\r\n                <div class=\"titulo_pagina\">Salário Médio de Contratação</div>\r\n                <div class=\"corpo_texto\">\r\n                    Para cada uma das ocupações que compõem a Classificação Brasileira de Ocupações - CBO, a FIPE calcula o salário médio de\r\n                    contratação dos últimos 6 meses com base nos dados do CAGED/MTE. São considerados apenas os casos cuja jornada\r\n                    de trabalho seja de 40 a 44 horas semanais e cujos salários mensais informados sejam iguais ou maiores\r\n                    que o salário mínimo vigente. Foram consideradas as contratações ocorridas entre {{atualizacaoInicio}} e {{atualizacaoFim}}.\r\n                    <br />\r\n                    <br /> A informação pode ser desagregada segundo as características pessoais (gênero, escolaridade, faixa etária,\r\n                    raça-cor) e também segundo as unidades da federação.\r\n                </div>\r\n            </div>\r\n            <!-- / TITLE AND CONTENT -->\r\n\r\n            <!-- FORM -->\r\n            <div class=\"form-group row\" style=\"margin-top:30px\">\r\n                <label class=\"col-2 col-form-label\">CBO</label>\r\n                <div class=\"col-10\">\r\n                    <kendo-combobox [(ngModel)]=\"filtro.cdCbo\" [data]=\"lista_cbo_filtro\" [filterable]=\"true\" [placeholder]=\"'Selecione...'\" [valuePrimitive]=\"true\"\r\n                        (filterChange)=\"cmbCbo_Filter($event)\" textField=\"nmCbo\" valueField=\"cdCbo\" formControlName=\"cdCbo\" style=\"width: 70%; height: 35px\"></kendo-combobox>\r\n                    <div class=\"validacao\" *ngIf=\"form.get('cdCbo').invalid && (form.get('cdCbo').dirty || form.get('cdCbo').touched)\">Campo obrigatório</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-2 col-form-label\">Estado</label>\r\n                <div class=\"col-10\">\r\n                    <kendo-combobox [(ngModel)]=\"filtro.cdUf\" [data]=\"lista_uf_filtro\" [filterable]=\"true\" [placeholder]=\"'Selecione...'\" [valuePrimitive]=\"true\"\r\n                        (filterChange)=\"cmbUF_Filter($event)\" textField=\"sgUf\" valueField=\"cdUf\" formControlName=\"cdUf\" style=\"width: 70%; height: 35px\"></kendo-combobox>\r\n                    <div class=\"validacao\" *ngIf=\"form.get('cdUf').invalid && (form.get('cdUf').dirty || form.get('cdUf').touched)\">Campo obrigatório</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-2 col-form-label\">Faixa Etária</label>\r\n                <div class=\"col-10\">\r\n                    <kendo-combobox [(ngModel)]=\"filtro.cdFaixaEtaria\" [data]=\"lista_faixa_filtro\" [filterable]=\"true\" [placeholder]=\"'Selecione...'\"\r\n                        [valuePrimitive]=\"true\" (filterChange)=\"cmbFaixa_Filter($event)\" textField=\"dsFaixaEtaria\" valueField=\"cdFaixaEtaria\"\r\n                        formControlName=\"cdFaixaEtaria\" style=\"width: 70%; height: 35px\"></kendo-combobox>\r\n                    <div class=\"validacao\" *ngIf=\"form.get('cdFaixaEtaria').invalid && (form.get('cdFaixaEtaria').dirty || form.get('cdFaixaEtaria').touched)\">Campo obrigatório</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-2 col-form-label\">Gênero</label>\r\n                <div class=\"col-10\">\r\n                    <kendo-combobox [(ngModel)]=\"filtro.cdGenero\" [data]=\"lista_genero_filtro\" [filterable]=\"true\" [placeholder]=\"'Selecione...'\"\r\n                        [valuePrimitive]=\"true\" (filterChange)=\"cmbGenero_Filter($event)\" textField=\"dsGenero\" valueField=\"cdGenero\"\r\n                        formControlName=\"cdGenero\" style=\"width: 70%; height: 35px\"></kendo-combobox>\r\n                    <div class=\"validacao\" *ngIf=\"form.get('cdGenero').invalid && (form.get('cdGenero').dirty || form.get('cdGenero').touched)\">Campo obrigatório</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-2 col-form-label\">Raça-Cor</label>\r\n                <div class=\"col-10\">\r\n                    <kendo-combobox [(ngModel)]=\"filtro.cdCor\" [data]=\"lista_cor_filtro\" [filterable]=\"true\" [placeholder]=\"'Selecione...'\" [valuePrimitive]=\"true\"\r\n                        (filterChange)=\"cmbCor_Filter($event)\" textField=\"dsCor\" valueField=\"cdCor\" formControlName=\"cdCor\" style=\"width: 70%; height: 35px\"></kendo-combobox>\r\n                    <div class=\"validacao\" *ngIf=\"form.get('cdCor').invalid && (form.get('cdCor').dirty || form.get('cdCor').touched)\">Campo obrigatório</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-2 col-form-label\">Escolaridade</label>\r\n                <div class=\"col-10\">\r\n                    <kendo-combobox [(ngModel)]=\"filtro.cdEscolaridade\" [data]=\"lista_escolaridade_filtro\" [filterable]=\"true\" [placeholder]=\"'Selecione...'\"\r\n                        [valuePrimitive]=\"true\" (filterChange)=\"cmbEscolaridade_Filter($event)\" textField=\"dsEscolaridade\" valueField=\"cdEscolaridade\"\r\n                        formControlName=\"cdEscolaridade\" style=\"width: 70%; height: 35px\"></kendo-combobox>\r\n                    <div class=\"validacao\" *ngIf=\"form.get('cdEscolaridade').invalid && (form.get('cdEscolaridade').dirty || form.get('cdEscolaridade').touched)\">Campo obrigatório</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-9\" style=\"text-align: right\">\r\n                    <button type=\"button\" class=\"btn btn-primary-cancel\" (click)=\"fnLimpar()\">Limpar</button>\r\n                    <button type=\"button\" class=\"btn btn-primary-confirm\" (click)=\"fnPesquisar();\">Pesquisar</button>\r\n                </div>\r\n            </div>\r\n            <!-- / FORM -->\r\n\r\n             <!-- RESULT MESSAGE -->\r\n             <div class=\"col-12\">\r\n                <div class=\"filters-show\" *ngIf=\"textoFiltros === true\">\r\n                    Resultados obtidos para <strong>CBO {{dados_cbo}}</strong>, em <b>{{textoUf}}</b>, na faixa etária <b>{{textoFaixaEtaria}}</b>, no gênero <b>{{textoGenero}}</b>, na raça-cor <b>{{textoCor}}</b> e com escolaridade <b>{{textoEscolaridade}}</b>.\r\n                </div>\r\n            </div>\r\n            <!-- / RESULT MESSAGE -->\r\n\r\n            <!-- RESULT -->\r\n            <div id=\"resultado\" class=\"col-12\" style=\"display: flex; justify-content: center;\">\r\n                <span id=\"valor_salario\" class=\"form-group row\"></span>\r\n            </div>\r\n            <div class=\"col-12 titulo\" *ngIf=\"showDados === true\">\r\n                VALOR DO SALÁRIO MÉDIO DE CONTRATAÇÃO\r\n            </div>\r\n            <div class=\"col-12 info_value\" *ngIf=\"showDados === true\">\r\n                O valor acima representa o salário médio inicial para a ocupação\r\n                <strong>CBO {{dados_cbo}}</strong> com o perfil escolhido nesta consulta. Foi calculado com base nas {{dados_qtde}}\r\n                contratações observadas entre {{atualizacaoInicio}} e {{atualizacaoFim}}.\r\n            </div>\r\n            <div class=\"MensagemNulo\" *ngIf=\"showNulo === true\">\r\n                <div class=\"retorno_pesquisa\">Pesquisa não disponível</div>\r\n                Não existem dados para os filtros selecionados.\r\n            </div>\r\n            <!-- / RESULT -->\r\n\r\n        </div>\r\n\r\n        <div class=\"lateral\">\r\n\r\n            <!-- LINKS LATERAL -->\r\n            <h4 class=\"lateral_titulo\">VEJA TAMBÉM</h4>\r\n            <div class=\"lateral_link fixo\" [routerLink]=\"['/perfil-contratados']\">Perfil dos Contratados</div>\r\n            <div class=\"lateral_link\" [routerLink]=\"['/pesquisa-salarial']\">Pesquisa Salarial</div>\r\n            <!-- <div class=\"lateral_link\" [routerLink]=\"['/indicadores-mercado']\">Indicadores do Mercado de Trabalho</div> -->\r\n            <div class=\"lateral_link\" [routerLink]=\"['/sobre/boletim']\">Boletim Mensal</div>\r\n            <!-- / LINKS LATERAL -->\r\n\r\n            <!-- CALL TO ACTION -->\r\n            <div class=\"lateral_caixa_azul\">\r\n                <h4 class=\"lateral_titulo_01\">Mais conteúdo para você</h4>\r\n                Tenha acesso aos conteúdos regionais e setoriais\r\n                <button type=\"button\" class=\"btn btn-primary\" style=\"margin-top: 10px\" [routerLink]=\"['/sobre/planos']\">PLANOS DE ASSINATURA</button>\r\n            </div>\r\n            <!-- / CALL TO ACTION -->\r\n\r\n            <!-- CONTACT -->\r\n            <div class=\"lateral_caixa_cinza\">\r\n                <h4 class=\"lateral_titulo_02\">Precisa de ajuda?</h4>\r\n                Para dúvidas ou sugestões, envie um e-mail para:\r\n                <br />\r\n                <b>salarios@fipe.org.br</b>\r\n            </div>\r\n            <!-- / CONTACT -->\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/perfil-contratados/perfil-contratados.component.scss":
/***/ (function(module, exports) {

module.exports = ".topo {\n  background-image: url(\"/assets/topos/perfil_contratados.png\"); }\n\n.app-nc-perfil-contratados {\n  margin-left: auto;\n  margin-right: auto;\n  width: 1149px; }\n\n.app-nc-perfil-contratados .formulario {\n    float: left;\n    padding-right: 40px;\n    width: calc(100% - 240px);\n    margin-top: 30px;\n    margin-bottom: 80px; }\n\n.app-nc-perfil-contratados .formulario .titulo {\n      color: #20a1fa;\n      font-weight: bold;\n      text-align: center;\n      padding-bottom: 10px; }\n\n.app-nc-perfil-contratados .formulario #valor_salario {\n      color: #20a1fa;\n      font-size: 100px;\n      margin-bottom: 0px; }\n\n.app-nc-perfil-contratados .lateral {\n    float: left;\n    margin-top: 30px;\n    width: 240px; }\n\n.validacao {\n  padding-left: 15px; }\n\n.info_value {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/perfil-contratados/perfil-contratados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilContratadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__db_service__ = __webpack_require__("./src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spinner_service__ = __webpack_require__("./src/app/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filtro_class__ = __webpack_require__("./src/app/components/perfil-contratados/filtro.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__perfil_contratados_class__ = __webpack_require__("./src/app/components/perfil-contratados/perfil-contratados.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PerfilContratadosComponent = (function () {
    function PerfilContratadosComponent(_scrollToService, dbService, sessionService, spinnerService) {
        var _this = this;
        this._scrollToService = _scrollToService;
        this.dbService = dbService;
        this.sessionService = sessionService;
        this.spinnerService = spinnerService;
        this.atualizacaoInicio = '';
        this.atualizacaoFim = '';
        this.dados = new __WEBPACK_IMPORTED_MODULE_7__perfil_contratados_class__["a" /* PerfilContratados */]();
        this.dados_cbo = '';
        this.dados_salario = '';
        this.dados_qtde = '';
        this.filtro = new __WEBPACK_IMPORTED_MODULE_6__filtro_class__["a" /* Filtro */]();
        this.lista_cbo = [];
        this.lista_cbo_filtro = [];
        this.lista_uf = [];
        this.lista_uf_filtro = [];
        this.lista_faixa = [];
        this.lista_faixa_filtro = [];
        this.lista_genero = [];
        this.lista_genero_filtro = [];
        this.lista_cor = [];
        this.lista_cor_filtro = [];
        this.lista_escolaridade = [];
        this.lista_escolaridade_filtro = [];
        this.showDados = false;
        this.showNulo = false;
        this.textoFiltros = false;
        this.textoCBO = '';
        this.textoUf = '';
        this.textoFaixaEtaria = '';
        this.textoGenero = '';
        this.textoCor = '';
        this.textoEscolaridade = '';
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            cdCbo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            cdUf: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            cdFaixaEtaria: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            cdGenero: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            cdCor: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            cdEscolaridade: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
        // Carrega combos
        this.combosLoad();
        // Carrega data de atualização
        this.dbService.get('ParametroAtualizacao/?id_transacao=4').subscribe(function (result) {
            // Encerra spinner
            _this.spinnerService.stop();
            // Guarda objetos
            _this.atualizacaoInicio = result.atualizacaoInicio;
            _this.atualizacaoFim = result.atualizacaoFim;
        });
    }
    PerfilContratadosComponent.prototype.combosLoad = function () {
        var _this = this;
        this.dbService.get('CBO').subscribe(function (result) {
            // Encerra spinner
            _this.spinnerService.stop();
            // Guarda objetos
            _this.lista_cbo =
                _this.lista_cbo_filtro = result;
        });
        this.dbService.get('UF').subscribe(function (result) {
            // Encerra spinner
            _this.spinnerService.stop();
            // Guarda objetos
            _this.lista_uf =
                _this.lista_uf_filtro = result;
            _this.filtro.cdUf = 99;
        });
        this.dbService.get('FaixaEtaria').subscribe(function (result) {
            // Encerra spinner
            _this.spinnerService.stop();
            // Guarda objetos
            _this.lista_faixa =
                _this.lista_faixa_filtro = result;
            _this.filtro.cdFaixaEtaria = 9;
        });
        this.dbService.get('Genero').subscribe(function (result) {
            // Encerra spinner
            _this.spinnerService.stop();
            // Guarda objetos
            _this.lista_genero =
                _this.lista_genero_filtro = result;
            _this.filtro.cdGenero = 9;
        });
        this.dbService.get('Cor').subscribe(function (result) {
            // Encerra spinner
            _this.spinnerService.stop();
            // Guarda objetos
            _this.lista_cor =
                _this.lista_cor_filtro = result;
            _this.filtro.cdCor = 9;
        });
        this.dbService.get('Escolaridade').subscribe(function (result) {
            // Encerra spinner
            _this.spinnerService.stop();
            // Guarda objetos
            _this.lista_escolaridade =
                _this.lista_escolaridade_filtro = result;
            _this.filtro.cdEscolaridade = 9;
        });
    };
    PerfilContratadosComponent.prototype.cmbCbo_Filter = function (value) {
        this.lista_cbo_filtro = this.lista_cbo.filter(function (s) { return s.nmCbo.toLowerCase().indexOf(value.toLowerCase()) !== -1; });
    };
    PerfilContratadosComponent.prototype.cmbUF_Filter = function (value) {
        this.lista_uf_filtro = this.lista_uf.filter(function (s) { return s.sgUf.toLowerCase().indexOf(value.toLowerCase()) !== -1; });
    };
    PerfilContratadosComponent.prototype.cmbFaixa_Filter = function (value) {
        this.lista_faixa_filtro = this.lista_faixa.filter(function (s) { return s.dsFaixaEtaria.toLowerCase().indexOf(value.toLowerCase()) !== -1; });
    };
    PerfilContratadosComponent.prototype.cmbGenero_Filter = function (value) {
        this.lista_genero_filtro = this.lista_genero.filter(function (s) { return s.dsGenero.toLowerCase().indexOf(value.toLowerCase()) !== -1; });
    };
    PerfilContratadosComponent.prototype.cmbCor_Filter = function (value) {
        this.lista_cor_filtro = this.lista_cor.filter(function (s) { return s.dsCor.toLowerCase().indexOf(value.toLowerCase()) !== -1; });
    };
    PerfilContratadosComponent.prototype.cmbEscolaridade_Filter = function (value) {
        this.lista_escolaridade_filtro = this.lista_escolaridade.filter(function (s) { return s.dsEscolaridade.toLowerCase().indexOf(value.toLowerCase()) !== -1; });
    };
    PerfilContratadosComponent.prototype.fnLimpar = function () {
        // Limpa campos
        this.filtro.cdCbo = null;
        this.filtro.cdUf = null;
        this.filtro.cdFaixaEtaria = null;
        this.filtro.cdGenero = null;
        this.filtro.cdCor = null;
        this.filtro.cdEscolaridade = null;
        // Limpa erros
        this.form.reset();
        // Esconde tabelas
        __WEBPACK_IMPORTED_MODULE_2_jquery__("#valor_salario").text("");
        this.showDados = false;
        this.showNulo = false;
        this.textoFiltros = false;
    };
    PerfilContratadosComponent.prototype.fnPesquisar = function () {
        var _this = this;
        var label = __WEBPACK_IMPORTED_MODULE_2_jquery__("#valor_salario");
        this.showDados = false;
        this.showNulo = false;
        this.textoFiltros = false;
        label.text("");
        // Valida formulário
        if (!this.form.valid) {
            // Exibe erros
            for (var ctrl in this.form.controls) {
                this.form.controls[ctrl].markAsTouched();
            }
        }
        else {
            this.dbService.post('PerfilContratados', this.filtro).subscribe(function (result) {
                // Encerra spinner
                _this.spinnerService.stop();
                // Rola scroll
                _this.fnScrollTo();
                if (!isNaN(result.vlSalario)) {
                    // Guarda objetos
                    _this.dados_cbo = _this.lista_cbo.filter(function (s) { return s.cdCbo === _this.filtro.cdCbo; })[0].nmCbo;
                    _this.dados_salario = result.vlSalario;
                    _this.dados_qtde = result.qtde;
                    _this.showDados = true;
                    _this.textoFiltros = true;
                    _this.textoCBO = _this.lista_cbo.filter(function (s) { return s.cdCbo === _this.filtro.cdCbo; })[0].nmCbo;
                    _this.textoUf = _this.lista_uf.filter(function (s) { return s.cdUf === _this.filtro.cdUf; })[0].sgUf;
                    _this.textoFaixaEtaria = _this.lista_faixa.filter(function (s) { return s.cdFaixaEtaria === _this.filtro.cdFaixaEtaria; })[0].dsFaixaEtaria;
                    _this.textoGenero = _this.lista_genero.filter(function (s) { return s.cdGenero === _this.filtro.cdGenero; })[0].dsGenero;
                    _this.textoCor = _this.lista_cor.filter(function (s) { return s.cdCor === _this.filtro.cdCor; })[0].dsCor;
                    _this.textoEscolaridade = _this.lista_escolaridade.filter(function (s) { return s.cdEscolaridade === _this.filtro.cdEscolaridade; })[0].dsEscolaridade;
                    label.text(_this.dados_salario);
                    label.prop("Counter", 500).animate({
                        Counter: label.text()
                    }, {
                        duration: 1900,
                        easing: "swing",
                        step: function (now) {
                            label.text(Math.ceil(now).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace(',00', ''));
                        }
                    });
                    var audio = new Audio('/assets/perfil.mp3');
                    audio.play();
                }
                else {
                    _this.showNulo = true;
                    _this.textoFiltros = false;
                }
            });
        }
    };
    PerfilContratadosComponent.prototype.fnScrollTo = function () {
        var config = {
            target: 'resultado',
            offset: -97
        };
        this._scrollToService.scrollTo(config);
    };
    PerfilContratadosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-perfil-contratados-root',
            template: __webpack_require__("./src/app/components/perfil-contratados/perfil-contratados.component.html"),
            styles: [__webpack_require__("./src/app/components/perfil-contratados/perfil-contratados.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__nicky_lenaers_ngx_scroll_to__["b" /* ScrollToService */],
            __WEBPACK_IMPORTED_MODULE_3__db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_4__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_5__spinner_service__["a" /* SpinnerService */]])
    ], PerfilContratadosComponent);
    return PerfilContratadosComponent;
}());



/***/ }),

/***/ "./src/app/components/pesquisa-salarial-demo/pesquisa-salarial-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BANNER -->\r\n<div class=\"topo\">\r\n    <div class=\"topo-titulo\">RELATÓRIO DE PESQUISA SALARIAL - DEMOSTRAÇÃO</div>\r\n    <div class=\"topo-nav\">\r\n        <nav aria-label=\"breadcrumb\">\r\n            <ol class=\"breadcrumb\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a [routerLink]=\"['/home']\">HOME</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">PESQUISA SALARIAL - DEMOSTRAÇÃO</li>\r\n            </ol>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<!-- / BANNER -->\r\n\r\n<div class=\"content\">\r\n    <div class=\"app-pesquisa-salarial-demo\">\r\n        <div class=\"formulario\">\r\n            \r\n            <!-- TITLE AND CONTENT -->\r\n            <div class=\"col-12\">\r\n                <div class=\"titulo_pagina\">Pesquisa Salarial - Demonstração</div>\r\n            </div>   \r\n            <div>\r\n                <div style=\"width:1150px; border-style:hidden;\">\r\n                    <p>\r\n                        A demonstração da Pesquisa Salarial, que contêm os salários médios e medianos de todas as ocupações da CBO (Classificação Brasileira de Ocupações), praticados em Janeiro de 2018 a Junho de 2018.\r\n                        Esta demonstração apresenta os salários de todos os municípios do Brasil. Se você adquirir a assinatura completa, verá estes mesmos resultados, cobrindo todas as unidades da federação e todas as atividades, atualizados para os instrumentos observados nos últimos 6 meses.zados para os instrumentos vigentes nos últimos 12 meses.\r\n                    </p>\r\n                    <p>\r\n                        Caso prefira, poderá fazer uma assinatura de menor âmbito, escolhendo alguns municípios, e terá os salários de todas as ocupações, vigentes nos últimos 6 meses, observados nos escolhidos selecionados.\r\n                        Para todas as assinaturas, as telas apresentam os resultados em telas do Power BI, que permitem escolher ocupações e combiná-las com as desagregações desejadas.\r\n                        Tenha uma boa demosntração! Em caso de dúvida, entre em contato e teremos prazer em ajudar e esclarecer.\r\n                    </p>\r\n                </div>\r\n            </div>         \r\n            <!-- / TITLE AND CONTENT -->\r\n            <div class=\"col-12\" *ngIf=\"!showBloqueio\">\r\n                <button class=\"btn btn-secondary\" (click)=\"fullscreen()\" *ngIf=\"!showBloqueio\">[ + ]</button><br />\r\n                <div #embeddedReport style=\"width:1150px; height:700px; border-style:hidden;\" *ngIf=\"!showBloqueio\"></div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/pesquisa-salarial-demo/pesquisa-salarial-demo.component.scss":
/***/ (function(module, exports) {

module.exports = ".topo {\n  background-image: url(\"/assets/topos/pesquisa_salarial.png\"); }\n\n.app-pesquisa-salarial-demo {\n  margin-left: auto;\n  margin-right: auto;\n  width: 1149px; }\n\n.app-pesquisa-salarial-demo .formulario {\n    float: left;\n    padding-right: 20px;\n    width: calc(100% - 240px);\n    margin-top: 20px;\n    margin-bottom: 80px; }\n\n.app-pesquisa-salarial-demo .formulario .titulo {\n      font-size: 16px;\n      color: #fff;\n      text-align: left;\n      background-image: url(/assets/table_header.png);\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-bottom: 25px; }\n\n.app-pesquisa-salarial-demo .formulario .titulo_faixaescola {\n      font-size: 14px;\n      color: #fff;\n      text-align: left;\n      background-image: url(/assets/table_header.png);\n      padding-left: 10px;\n      padding-right: 10px;\n      padding-bottom: 15px; }\n\n.app-pesquisa-salarial-demo .lateral {\n    float: left;\n    margin-top: 25px;\n    width: 240px; }\n\n.validacao {\n  padding-left: 15px; }\n\n.pesqsalarial-label {\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n  font-size: 16px;\n  color: #2C2929;\n  text-align: left;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 5px; }\n\niframe {\n  border: none; }\n"

/***/ }),

/***/ "./src/app/components/pesquisa-salarial-demo/pesquisa-salarial-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisaSalarialDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_login_app_login_component__ = __webpack_require__("./src/app/components/app-login/app-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db_service__ = __webpack_require__("./src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spinner_service__ = __webpack_require__("./src/app/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PesquisaSalarialDemoComponent = (function () {
    function PesquisaSalarialDemoComponent(_scrollToService, dbService, sessionService, spinnerService) {
        this._scrollToService = _scrollToService;
        this.dbService = dbService;
        this.sessionService = sessionService;
        this.spinnerService = spinnerService;
        this.showBloqueio = false;
        this.fnPesquisar();
    }
    PesquisaSalarialDemoComponent.prototype.fnPesquisar = function () {
        var _this = this;
        var sessao = JSON.parse(sessionStorage.getItem('sessao_usuario') || '{}');
        //this.dbService.post('EmbedInfo/VerificaPermissaoNCP', sessao.hash).subscribe(resultPersonalizado => {
        // if (!resultPersonalizado.permissao)
        // {
        this.dbService.get('EmbedInfo/GetPesquisaSalarialDemo').subscribe(function (result) {
            var pages = [];
            var model = window['powerbi-client'].models;
            _this.config = result;
            var embedConfig = {
                type: 'report',
                tokenType: model.TokenType.Embed,
                accessToken: result.embedToken.token,
                embedUrl: result.embedReport[0].embedUrl,
                permissions: model.Permissions.All,
                settings: {
                    filterPaneEnabled: false,
                    navContentPaneEnabled: false,
                    layoutType: model.LayoutType.Custom,
                    customLayout: {
                        displayOption: model.DisplayOption.FitToWidth
                    }
                }
            };
            var report = powerbi.embed(_this.embeddedReport.nativeElement, embedConfig);
            //report.fullscreen();
        });
    };
    PesquisaSalarialDemoComponent.prototype.fullscreen = function () {
        // Get a reference to the embedded report HTML element
        var embedContainer = this.embeddedReport.nativeElement;
        // Get a reference to the embedded report.
        var report = powerbi.get(embedContainer);
        // Displays the report in full screen mode.
        report.fullscreen();
    };
    PesquisaSalarialDemoComponent.prototype.fnScrollTo = function () {
        var config = {
            target: 'resultado',
            offset: -97
        };
        this._scrollToService.scrollTo(config);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("login"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__app_login_app_login_component__["a" /* AppLoginModalComponent */])
    ], PesquisaSalarialDemoComponent.prototype, "login", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('embeddedReport'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], PesquisaSalarialDemoComponent.prototype, "embeddedReport", void 0);
    PesquisaSalarialDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pesquisa-salarial-demo',
            template: __webpack_require__("./src/app/components/pesquisa-salarial-demo/pesquisa-salarial-demo.component.html"),
            styles: [__webpack_require__("./src/app/components/pesquisa-salarial-demo/pesquisa-salarial-demo.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__nicky_lenaers_ngx_scroll_to__["b" /* ScrollToService */],
            __WEBPACK_IMPORTED_MODULE_2__db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_3__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_4__spinner_service__["a" /* SpinnerService */]])
    ], PesquisaSalarialDemoComponent);
    return PesquisaSalarialDemoComponent;
}());



/***/ }),

/***/ "./src/app/components/pesquisa-salarial/bloqueio-assinatura/bloqueio-assinatura.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"corpo_texto\">\r\n    <p>\r\n        Na Pesquisa Salarial, a Fipe calcula os salários médios e medianos do conjunto de\r\n        trabalhadores admitidos e desligados nos últimos seis meses, para cada uma das\r\n        ocupações existentes na CBO – Classificação Brasileira de Ocupações. Os resultados\r\n        são desagregados e apresentados em três formatos: por quartil, por faixa etária e por\r\n        tamanho de estabelecimento.\r\n        O interessado pode granular sua busca para Regiões, Unidades da Federação e\r\n        Municípios. A base de dados utilizada é o CAGED – Cadastro de Empregados e\r\n        Desempregados, atualizada e disponibilizada mensalmente pelo Ministério do\r\n        Trabalho e Emprego. As informações são disponibilizadas por meio de um <a [routerLink]=\"['/sobre/planos']\" style=\"color: #33a9f4; font-weight: bold;\">Plano de Assinatura</a>.\r\n    </p>\r\n</div>\r\n<br />\r\n<br />\r\n<div class=\"MensagemNulo\">\r\n    <div class=\"retorno_pesquisa\">Assinatura requerida</div>\r\n    Você deve possuir uma assinatura para acessar o conteúdo.<br/>\r\n    Por favor, faça a autenticação no site ou contrate um dos nossos planos.<br/>\r\n    Se já estiver autenticado, certifique-se de que contratou o produto selecionados.\r\n    <br />\r\n    <p style=\"font-size: 18px;\"><strong>Veja uma <a [routerLink]=\"['/pesquisa-salarial-demo']\" style=\"color: #33a9f4; font-weight: bold;\">demonstração</a> com nossos dados de 2018.</strong></p>\r\n</div>"

/***/ }),

/***/ "./src/app/components/pesquisa-salarial/bloqueio-assinatura/bloqueio-assinatura.component.scss":
/***/ (function(module, exports) {

module.exports = ".MensagemNulo {\n  padding-top: 1em; }\n"

/***/ }),

/***/ "./src/app/components/pesquisa-salarial/bloqueio-assinatura/bloqueio-assinatura.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisaSalarialBloqueioAssinaturaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PesquisaSalarialBloqueioAssinaturaComponent = (function () {
    function PesquisaSalarialBloqueioAssinaturaComponent() {
    }
    PesquisaSalarialBloqueioAssinaturaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pesquisa-salarial-bloqueio-assinatura',
            template: __webpack_require__("./src/app/components/pesquisa-salarial/bloqueio-assinatura/bloqueio-assinatura.component.html"),
            styles: [__webpack_require__("./src/app/components/pesquisa-salarial/bloqueio-assinatura/bloqueio-assinatura.component.scss")]
        })
    ], PesquisaSalarialBloqueioAssinaturaComponent);
    return PesquisaSalarialBloqueioAssinaturaComponent;
}());



/***/ }),

/***/ "./src/app/components/pesquisa-salarial/pesquisa-salarial.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BANNER -->\r\n<div class=\"topo\">\r\n    <div class=\"topo-titulo\">RELATÓRIO DE PESQUISA SALARIAL</div>\r\n    <div class=\"topo-nav\">\r\n        <nav aria-label=\"breadcrumb\">\r\n            <ol class=\"breadcrumb\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a [routerLink]=\"['/home']\">HOME</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">PESQUISA SALARIAL</li>\r\n            </ol>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<!-- / BANNER -->\r\n\r\n<div class=\"content\">\r\n    <div class=\"app-pesquisa-salarial\">\r\n        <div class=\"formulario\">\r\n            \r\n            <!-- TITLE AND CONTENT -->\r\n            <div class=\"col-12\">\r\n                <div class=\"titulo_pagina\">Pesquisa Salarial</div>\r\n                <div class=\"corpo_texto\">\r\n                    \r\n                </div>\r\n            </div>            \r\n            <!-- / TITLE AND CONTENT -->\r\n            <div class=\"col-12\" *ngIf=\"!showBloqueio\">\r\n                <button class=\"btn btn-secondary\" (click)=\"fullscreen()\" *ngIf=\"!showBloqueio\">[ + ]</button><br />\r\n                <div #embeddedReport style=\"width:1150px; height:700px; border-style:hidden;\"></div>\r\n            </div>\r\n            <app-pesquisa-salarial-bloqueio-assinatura *ngIf=\"showBloqueio\"></app-pesquisa-salarial-bloqueio-assinatura>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/pesquisa-salarial/pesquisa-salarial.component.scss":
/***/ (function(module, exports) {

module.exports = ".topo {\n  background-image: url(\"/assets/topos/pesquisa_salarial.png\"); }\n\n.app-pesquisa-salarial {\n  margin-left: auto;\n  margin-right: auto;\n  width: 1149px; }\n\n.app-pesquisa-salarial .formulario {\n    float: left;\n    padding-right: 20px;\n    width: calc(100% - 240px);\n    margin-top: 20px;\n    margin-bottom: 80px; }\n\n.app-pesquisa-salarial .formulario .titulo {\n      font-size: 16px;\n      color: #fff;\n      text-align: left;\n      background-image: url(/assets/table_header.png);\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-bottom: 25px; }\n\n.app-pesquisa-salarial .formulario .titulo_faixaescola {\n      font-size: 14px;\n      color: #fff;\n      text-align: left;\n      background-image: url(/assets/table_header.png);\n      padding-left: 10px;\n      padding-right: 10px;\n      padding-bottom: 15px; }\n\n.app-pesquisa-salarial .lateral {\n    float: left;\n    margin-top: 25px;\n    width: 240px; }\n\n.validacao {\n  padding-left: 15px; }\n\n.pesqsalarial-label {\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n  font-size: 16px;\n  color: #2C2929;\n  text-align: left;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 5px; }\n\niframe {\n  border: none; }\n"

/***/ }),

/***/ "./src/app/components/pesquisa-salarial/pesquisa-salarial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisaSalarialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_login_app_login_component__ = __webpack_require__("./src/app/components/app-login/app-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db_service__ = __webpack_require__("./src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spinner_service__ = __webpack_require__("./src/app/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PesquisaSalarialComponent = (function () {
    function PesquisaSalarialComponent(_scrollToService, dbService, sessionService, spinnerService) {
        this._scrollToService = _scrollToService;
        this.dbService = dbService;
        this.sessionService = sessionService;
        this.spinnerService = spinnerService;
        this.showBloqueio = false;
        this.fnPesquisar();
    }
    PesquisaSalarialComponent.prototype.fnPesquisar = function () {
        var _this = this;
        var sessao = JSON.parse(sessionStorage.getItem('sessao_usuario') || '{}');
        //this.dbService.post('EmbedInfo/VerificaPermissaoNCP', sessao.hash).subscribe(resultPersonalizado => {
        // if (!resultPersonalizado.permissao)
        // {
        this.dbService.post('EmbedInfo/VerificaPermissaoPS', sessao.hash).subscribe(function (resultComum) {
            if (!resultComum.permissao) {
                _this.fnScrollTo();
                _this.showBloqueio = true;
            }
            else {
                _this.dbService.get('EmbedInfo/GetPesquisaSalarial').subscribe(function (result) {
                    var pages = [];
                    var model = window['powerbi-client'].models;
                    var basicFilter = {
                        $schema: "http://powerbi.com/product/schema#basic",
                        target: {
                            table: "VW_ASSINATURAS_ATIVAS_PS",
                            column: "IdCliente"
                        },
                        operator: "In",
                        values: [sessao.idUsuario],
                        filterType: model.FilterType.BasicFilter,
                    };
                    _this.config = result;
                    var embedConfig = {
                        type: 'report',
                        tokenType: model.TokenType.Embed,
                        accessToken: result.embedToken.token,
                        embedUrl: result.embedReport[0].embedUrl,
                        permissions: model.Permissions.All,
                        filters: [basicFilter],
                        settings: {
                            filterPaneEnabled: false,
                            navContentPaneEnabled: false,
                            layoutType: model.LayoutType.Custom,
                            customLayout: {
                                displayOption: model.DisplayOption.FitToWidth
                            }
                        }
                    };
                    var report = powerbi.embed(_this.embeddedReport.nativeElement, embedConfig);
                    report.fullscreen();
                });
            }
        });
    };
    PesquisaSalarialComponent.prototype.fullscreen = function () {
        // Get a reference to the embedded report HTML element
        var embedContainer = this.embeddedReport.nativeElement;
        // Get a reference to the embedded report.
        var report = powerbi.get(embedContainer);
        // Displays the report in full screen mode.
        report.fullscreen();
    };
    PesquisaSalarialComponent.prototype.fnScrollTo = function () {
        var config = {
            target: 'resultado',
            offset: -97
        };
        this._scrollToService.scrollTo(config);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("login"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__app_login_app_login_component__["a" /* AppLoginModalComponent */])
    ], PesquisaSalarialComponent.prototype, "login", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('embeddedReport'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], PesquisaSalarialComponent.prototype, "embeddedReport", void 0);
    PesquisaSalarialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pesquisa-salarial',
            template: __webpack_require__("./src/app/components/pesquisa-salarial/pesquisa-salarial.component.html"),
            styles: [__webpack_require__("./src/app/components/pesquisa-salarial/pesquisa-salarial.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__nicky_lenaers_ngx_scroll_to__["b" /* ScrollToService */],
            __WEBPACK_IMPORTED_MODULE_2__db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_3__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_4__spinner_service__["a" /* SpinnerService */]])
    ], PesquisaSalarialComponent);
    return PesquisaSalarialComponent;
}());



/***/ }),

/***/ "./src/app/components/sobre-salariometro/boletim/boletim.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BANNER -->\r\n<div class=\"topo\">\r\n    <div class=\"topo-titulo\">BOLETIM MENSAL {{ano}}</div>\r\n    <div class=\"topo-nav\">\r\n        <nav aria-label=\"breadcrumb\">\r\n            <ol class=\"breadcrumb\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a [routerLink]=\"['/home']\">HOME</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">BOLETIM MENSAL</li>\r\n            </ol>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<!-- / BANNER -->\r\n\r\n<div class=\"content\">\r\n    <div class=\"app-boletim\">\r\n        <div class=\"boletins\">\r\n            <div class=\"col-12\" style=\"margin-bottom: 30px\">\r\n\r\n                <!-- TITLE AND CONTENT-->\r\n                <div class=\"titulo_pagina\">Consolidação dos Resultados Mensais</div>\r\n                <div class=\"corpo_texto\">\r\n                    Selecione o mês desejado para visualizar o boletim. Você também pode compartilhar as informações através das redes sociais.\r\n                </div>\r\n                <!-- / TITLE AND CONTENT-->\r\n\r\n            </div>\r\n\r\n            <!-- BULLETIN -->\r\n            <div class=\"boletim\" *ngFor=\"let l of lista_boletins\">\r\n                <div class=\"imagem\" [style.background-image]=\"'url(/assets/boletins/imagens/' + l.urlImagem + ')'\"></div>\r\n                <div class=\"detalhes\">\r\n                    <div class=\"titulo1\">{{ (l.dsTitulo.length > 60) ? (l.dsTitulo | slice:0:60) + '...' : (l.dsTitulo) }}</div>\r\n                    <div class=\"mes-ano\">{{l.nuMes}} {{l.nuAno}}</div>\r\n                    <div class=\"descricao\">{{ (l.dsDetalhes.length > 170) ? (l.dsDetalhes | slice:0:170) + '...' : (l.dsDetalhes) }}</div>\r\n\r\n                    <div class=\"acao\">\r\n                        <button type=\"button\" class=\"btn btn-primary-confirm\" (click)=\"fnAbrirPDF(l.urlPdf)\">DOWNLOAD</button>\r\n                        <a [href]=\"'https://twitter.com/intent/tweet?text=' + replaceUrl(l.dsTitulo) + ' Acesse: &url=' + url_site + '/assets/boletins/pdfs/' + l.urlPdf + '&related='\"\r\n                            target=\"_blank\">\r\n                            <img src=\"/assets/redes_sociais_twitter.png\" width=\"72\" height=\"27\">\r\n                        </a>\r\n                        <a [href]=\"'https://www.facebook.com/sharer/sharer.php?u=' + url_site + '/assets/boletins/pdfs/' + l.urlPdf + '&display=popup'\"\r\n                            target=\"_blank\">\r\n                            <img src=\"/assets/redes_sociais_facebook.png\" width=\"72\" height=\"27\">\r\n                        </a>\r\n                        <a [href]=\"'https://plus.google.com/share?url=' + url_site + '/assets/boletins/pdfs/' + l.urlPdf\" target=\"_blank\">\r\n                            <img src=\"/assets/redes_sociais_gplus.png\" width=\"72\" height=\"27\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- / BULLETIN -->\r\n        \r\n        </div>\r\n        \r\n        <div class=\"lateral\">\r\n\r\n            <!-- LINKS LATERAL -->\r\n            <h4 class=\"lateral_titulo\">VEJA TAMBÉM</h4>\r\n            <div class=\"lateral_link\" *ngFor=\"let l of lista_anos\" (click)=\"boletinsLoad(l)\" [ngClass]=\"{ 'fixo': ano === l }\">Boletim Mensal {{l}}</div>\r\n            <!-- / LINKS LATERAL -->\r\n\r\n            <!-- CALL TO ACTION -->\r\n            <div class=\"lateral_caixa_azul\">\r\n                <h4 class=\"lateral_titulo_01\">Mais conteúdo para você</h4>\r\n                Tenha acesso aos conteúdos regionais e setoriais\r\n                <button type=\"button\" class=\"btn btn-primary\" style=\"margin-top: 10px\" [routerLink]=\"['/sobre/planos']\">PLANOS DE ASSINATURA</button>\r\n            </div>\r\n            <!-- / CALL TO ACTION -->\r\n\r\n            <!-- CONTACT -->\r\n            <div class=\"lateral_caixa_cinza\">\r\n                <h4 class=\"lateral_titulo_02\">Precisa de ajuda?</h4>\r\n                Para dúvidas ou sugestões, envie um e-mail para:\r\n                <br />\r\n                <b>salarios@fipe.org.br</b>\r\n            </div>\r\n            <!-- / CONTACT -->\r\n\r\n        </div>\r\n\r\n        <app-login-modal #login></app-login-modal>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/sobre-salariometro/boletim/boletim.component.scss":
/***/ (function(module, exports) {

module.exports = ".topo {\n  background-image: url(\"/assets/topos/boletim_mensal.png\"); }\n\n.app-boletim {\n  margin-left: auto;\n  margin-right: auto;\n  width: 1149px; }\n\n.app-boletim .boletins {\n    float: left;\n    margin-top: 30px;\n    padding-right: 40px;\n    width: calc(100% - 240px); }\n\n.app-boletim .boletins .boletim {\n      float: left;\n      margin-bottom: 50px;\n      width: 100%; }\n\n.app-boletim .boletins .boletim .imagem {\n        float: left;\n        height: 165px;\n        width: 245px; }\n\n.app-boletim .boletins .boletim .detalhes {\n        float: left;\n        height: 165px;\n        padding-left: 20px;\n        width: calc(100% - 245px); }\n\n.app-boletim .boletins .boletim .detalhes .titulo1 {\n          float: left;\n          color: #20a1fa;\n          font-size: 15px;\n          font-weight: bold;\n          height: 30px;\n          text-transform: uppercase;\n          width: 100%; }\n\n.app-boletim .boletins .boletim .detalhes .mes-ano {\n          float: left;\n          color: #3c3c3c;\n          font-size: 15px;\n          font-weight: bold;\n          height: 30px;\n          text-transform: uppercase;\n          width: 100%; }\n\n.app-boletim .boletins .boletim .detalhes .descricao {\n          float: left;\n          color: #3c3c3c;\n          font-size: 14px;\n          height: 36px;\n          width: 100%; }\n\n.app-boletim .boletins .boletim .detalhes .acao {\n          float: left;\n          margin-top: 26px;\n          width: 100%; }\n\n.app-boletim .boletins .boletim .detalhes .acao img {\n            margin-top: 9px;\n            margin-right: 3px; }\n\n.app-boletim .boletins .boletim .detalhes .acao .btn {\n            margin-right: 10px; }\n\n.app-boletim .boletins .boletim:nth-last-child(1) {\n      margin-bottom: 50px; }\n\n.app-boletim .lateral {\n    float: left;\n    margin-top: 30px;\n    width: 240px; }\n"

/***/ }),

/***/ "./src/app/components/sobre-salariometro/boletim/boletim.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sobre_BoletimComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db_service__ = __webpack_require__("./src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner_service__ = __webpack_require__("./src/app/spinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Sobre_BoletimComponent = (function () {
    function Sobre_BoletimComponent(dbService, spinnerService) {
        this.dbService = dbService;
        this.spinnerService = spinnerService;
        this.ano = 0;
        this.lista_anos = [];
        this.lista_boletins = [];
        this.url_site = 'http://salariometro.fipe.org.br/home';
        // Carrega lateral
        this.lateralLoad();
    }
    Sobre_BoletimComponent.prototype.fnAbrirPDF = function (url) {
        window.open('/assets/boletins/pdfs/' + url, '_blank');
    };
    Sobre_BoletimComponent.prototype.boletinsLoad = function (ano) {
        var _this = this;
        this.ano = ano;
        this.dbService.post('Boletim/GetByAno', ano).subscribe(function (result) {
            // Encerra spinner
            _this.spinnerService.stop();
            // Guarda objetos
            _this.lista_boletins = result;
        });
    };
    Sobre_BoletimComponent.prototype.lateralLoad = function () {
        var _this = this;
        this.dbService.get('Boletim/GetAllAnos').subscribe(function (result) {
            // Encerra spinner
            _this.spinnerService.stop();
            // Guarda objetos
            _this.lista_anos = result;
            // Carrega boletins
            _this.boletinsLoad(_this.lista_anos[0]);
        });
    };
    Sobre_BoletimComponent.prototype.replaceUrl = function (s) {
        return s.replace(/%/g, '%25');
    };
    Sobre_BoletimComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sobre-boletim',
            template: __webpack_require__("./src/app/components/sobre-salariometro/boletim/boletim.component.html"),
            styles: [__webpack_require__("./src/app/components/sobre-salariometro/boletim/boletim.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_2__spinner_service__["a" /* SpinnerService */]])
    ], Sobre_BoletimComponent);
    return Sobre_BoletimComponent;
}());



/***/ }),

/***/ "./src/app/components/sobre-salariometro/boletim/cadastrar.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cadastrar; });
var Cadastrar = (function () {
    function Cadastrar() {
        this.nmPessoa = '';
        this.dsEmail = '';
        this.dsOcupacao = '';
        this.dsOrganizacao = '';
    }
    return Cadastrar;
}());



/***/ }),

/***/ "./src/app/components/sobre-salariometro/boletim/cadastrar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BANNER -->\r\n<div class=\"topo\">\r\n    <div class=\"topo-titulo\">ASSINATURA BOLETIM MENSAL</div>\r\n    <div class=\"topo-nav\">\r\n        <nav aria-label=\"breadcrumb\">\r\n            <ol class=\"breadcrumb\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a [routerLink]=\"['/home']\">HOME</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">ASSINATURA BOLETIM MENSAL</li>\r\n            </ol>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<!-- / BANNER -->\r\n\r\n<div class=\"content\">\r\n    <div class=\"app-boletim-cadastrar\">\r\n        <div class=\"formulario\" [formGroup]=\"form\">\r\n           \r\n            <!-- TITLE AND CONTENT -->\r\n            <div class=\"titulo_pagina\">Receba o Boletim Mensal direto no seu email</div>\r\n            <div class=\"corpo_texto\">\r\n                O Salariômetro é atualizado mensalmente e a cada atualização, a FIPE elabora um Boletim Mensal que resume e consolida os\r\n                principais resultados. Cadastre-se para receber os boletins publicados diretamente no seu e-mail.\r\n            </div>\r\n            <!-- / TITLE AND CONTENT -->\r\n\r\n            <!-- NAME -->\r\n            <div class=\"form-group row\" style=\"margin-top:60px\">\r\n                <label class=\"col-2 col-form-label\">Nome</label>\r\n                <div class=\"col-6\">\r\n                    <input type=\"text\" class=\"form-control\" maxlength=\"100\" [(ngModel)]=\"item.nmPessoa\" formControlName=\"nmPessoa\">\r\n                </div>\r\n                <div class=\"col-4 erros\">\r\n                    <div class=\"validacao\" *ngIf=\"form.get('nmPessoa').invalid && (form.get('nmPessoa').dirty || form.get('nmPessoa').touched)\">Campo obrigatório</div>\r\n                </div>\r\n            </div>\r\n            <!-- / NAME -->\r\n\r\n            <!-- EMAIL -->\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-2 col-form-label\">E-mail</label>\r\n                <div class=\"col-6\">\r\n                    <input type=\"email\" class=\"form-control\" maxlength=\"100\" [(ngModel)]=\"item.dsEmail\" formControlName=\"dsEmail\">\r\n                </div>\r\n                <div class=\"col-4 erros\">\r\n                    <div class=\"validacao\" *ngIf=\"form.get('dsEmail').invalid && form.get('dsEmail').touched && (form.get('dsEmail').errors | first_error) === 'required'\">Campo obrigatório</div>\r\n                    <div class=\"validacao\" *ngIf=\"form.get('dsEmail').invalid && form.get('dsEmail').touched && (form.get('dsEmail').errors | first_error) === 'email'\">E-mail inválido</div>\r\n                </div>\r\n            </div>\r\n            <!-- / EMAIL -->\r\n\r\n            <!-- OCCUPATION -->\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-2 col-form-label\">Cargo/Ocupação</label>\r\n                <div class=\"col-6\">\r\n                    <input type=\"text\" class=\"form-control\" maxlength=\"100\" [(ngModel)]=\"item.dsOcupacao\" formControlName=\"dsOcupacao\">\r\n                </div>\r\n                <div class=\"col-4 erros\">\r\n                    <div class=\"validacao\" *ngIf=\"form.get('dsOcupacao').invalid && (form.get('dsOcupacao').dirty || form.get('dsOcupacao').touched)\">Campo obrigatório</div>\r\n                </div>\r\n            </div>\r\n            <!-- / OCCUPATION -->\r\n\r\n            <!-- COMPANY -->\r\n            <div class=\"form-group row\">\r\n                <label class=\"col-2 col-form-label\">Organização</label>\r\n                <div class=\"col-6\">\r\n                    <input type=\"text\" class=\"form-control\" maxlength=\"100\" [(ngModel)]=\"item.dsOrganizacao\" formControlName=\"dsOrganizacao\">\r\n                </div>\r\n                <div class=\"col-4 erros\">\r\n                    <div class=\"validacao\" *ngIf=\"form.get('dsOrganizacao').invalid && (form.get('dsOrganizacao').dirty || form.get('dsOrganizacao').touched)\">Campo obrigatório</div>\r\n                </div>\r\n            </div>\r\n            <!-- / COMPANY -->\r\n\r\n            <!-- BUTTON -->\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-8\" style=\"text-align: right\">\r\n                    <button type=\"button\" class=\"btn btn-primary-confirm\" (click)=\"fnCadastrar()\">Cadastrar</button>\r\n                </div>\r\n            </div>\r\n            <!-- / BUTTON -->\r\n\r\n            <!-- CONFIRMATION -->\r\n            <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showConfirmacao === true\">\r\n                Cadastro realizado com sucesso! Em breve você receberá um e-mail com mais informações.\r\n            </div>\r\n            <!-- / CONFIRMATION -->\r\n\r\n        </div>\r\n\r\n        <div class=\"lateral\">\r\n\r\n            <!-- LINKS LATERAL -->\r\n            <h4 class=\"lateral_titulo\">VEJA TAMBÉM</h4>\r\n            <div class=\"lateral_link\" [routerLink]=\"['/sobre/quem-somos']\">Quem Somos</div>\r\n            <div class=\"lateral_link\" [routerLink]=\"['/sobre/metodologia']\">Metodologia</div>\r\n            <div class=\"lateral_link\" [routerLink]=\"['/sobre/boletim']\">Boletim Mensal</div>\r\n            <div class=\"lateral_link\" [routerLink]=\"['/sobre/planos']\">Planos de Assinatura</div>\r\n            <!-- / LINKS LATERAL -->\r\n            \r\n            <!-- CALL TO ACTION -->\r\n            <div class=\"lateral_caixa_azul\">\r\n                <h4 class=\"lateral_titulo_01\">Mais conteúdo para você</h4>\r\n                Tenha acesso aos conteúdos regionais e setoriais\r\n                <button type=\"button\" class=\"btn btn-primary\" style=\"margin-top: 10px\" [routerLink]=\"['/sobre/planos']\">PLANOS DE ASSINATURA</button>\r\n            </div>\r\n            <!-- / CALL TO ACTION -->\r\n\r\n            <!-- CONTACT -->\r\n            <div class=\"lateral_caixa_cinza\">\r\n                <h4 class=\"lateral_titulo_02\">Precisa de ajuda?</h4>\r\n                Para dúvidas ou sugestões, envie um e-mail para:\r\n                <br />\r\n                <b>salarios@fipe.org.br</b>\r\n            </div>\r\n            <!-- / CONTACT -->\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/sobre-salariometro/boletim/cadastrar.component.scss":
/***/ (function(module, exports) {

module.exports = ".topo {\n  background-image: url(\"/assets/topos/boletim_mensal_assinatura.png\"); }\n\n.app-boletim-cadastrar {\n  margin-left: auto;\n  margin-right: auto;\n  width: 1149px; }\n\n.app-boletim-cadastrar .formulario {\n    float: left;\n    padding-right: 40px;\n    width: calc(100% - 240px);\n    margin-top: 30px; }\n\n.app-boletim-cadastrar .formulario .erros {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n\n.app-boletim-cadastrar .lateral {\n    float: left;\n    margin-top: 30px;\n    width: 240px; }\n\n.validacao {\n  padding-left: 15px; }\n"

/***/ }),

/***/ "./src/app/components/sobre-salariometro/boletim/cadastrar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sobre_BoletimCadastrarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db_service__ = __webpack_require__("./src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spinner_service__ = __webpack_require__("./src/app/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastrar_class__ = __webpack_require__("./src/app/components/sobre-salariometro/boletim/cadastrar.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Sobre_BoletimCadastrarComponent = (function () {
    function Sobre_BoletimCadastrarComponent(dbService, spinnerService) {
        this.dbService = dbService;
        this.spinnerService = spinnerService;
        this.item = new __WEBPACK_IMPORTED_MODULE_4__cadastrar_class__["a" /* Cadastrar */]();
        this.showConfirmacao = false;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            nmPessoa: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            dsEmail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email]),
            dsOcupacao: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            dsOrganizacao: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
    }
    Sobre_BoletimCadastrarComponent.prototype.fnCadastrar = function () {
        var _this = this;
        this.showConfirmacao = false;
        // Valida formulário
        if (!this.form.valid) {
            // Exibe erros
            for (var ctrl in this.form.controls) {
                this.form.controls[ctrl].markAsTouched();
            }
        }
        else {
            this.dbService.post('Boletim/Cadastrar', this.item).subscribe(function (result) {
                // Encerra spinner
                _this.spinnerService.stop();
                // Exibe notificação
                if (result.confirmacao === true) {
                    _this.showConfirmacao = true;
                    // Limpa campos
                    _this.item.nmPessoa = '';
                    _this.item.dsEmail = '';
                    _this.item.dsOcupacao = '';
                    _this.item.dsOrganizacao = '';
                    // Limpa erros
                    _this.form.reset();
                }
            });
        }
    };
    Sobre_BoletimCadastrarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sobre-boletim-cadastrar',
            template: __webpack_require__("./src/app/components/sobre-salariometro/boletim/cadastrar.component.html"),
            styles: [__webpack_require__("./src/app/components/sobre-salariometro/boletim/cadastrar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_3__spinner_service__["a" /* SpinnerService */]])
    ], Sobre_BoletimCadastrarComponent);
    return Sobre_BoletimCadastrarComponent;
}());



/***/ }),

/***/ "./src/app/components/sobre-salariometro/metodologia/metodologia.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BANNER -->\r\n<div class=\"topo\">\r\n    <div class=\"topo-titulo\">METODOLOGIA</div>\r\n    <div class=\"topo-nav\">\r\n        <nav aria-label=\"breadcrumb\">\r\n            <ol class=\"breadcrumb\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a [routerLink]=\"['/home']\">HOME</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">Metodologia e Detalhamento Técnico</li>\r\n            </ol>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<!-- / BANNER -->\r\n\r\n<div class=\"content\">\r\n    <div class=\"app-nc-metodologia\">\r\n        <div class=\"formulario\">\r\n            <div class=\"col-12\">\r\n\r\n                <!-- CONTENT -->\r\n                <div class=\"corpo_texto\">\r\n                    <p>A Fipe apresenta a seguir a metodologia e a descrição detalhada das ferramentas que constituem o projeto Salariômetro: \r\n                    Resultados da Negociação Coletiva Geral, Pesquisa Salarial e Indicadores do Mercado de Trabalho.\r\n                    </p>\r\n                </div>\r\n                <!-- / CONTENT -->\r\n\r\n                <div class=\"titulo_pagina\">Negociações Coletivas</div>\r\n\r\n                <!-- CATEGORIAS -->\r\n                <div class=\"subtitulo_pagina\">Categorias (Atividades Econômicas)</div>              \r\n                <div class=\"corpo_texto\">\r\n                    <p>A equipe do Salariômetro identifica inicialmente a atividade econômica na qual operam os signatários do instrumento negociado e a classifica segundo 48 categorias:\r\n                    </p> \r\n\r\n                    <p> • Administração Pública; \r\n                        <br />• Agricultura, Pecuária, Serviços Agropecuários e Pesca; \r\n                        <br />• Agronegócio da Cana; \r\n                        <br />• Artefatos de Borracha; \r\n                        <br />• Assessoria, Consultoria e Contabilidade; \r\n                        <br />• Atividades com Trabalhadores Inorganizados; \r\n                        <br />• Bancos e Serviços Financeiros; \r\n                        <br />• Bares, Restaurantes, Hotéis, Similares, Diversão e Turismo; \r\n                        <br />• Cemitérios e Agências Funerárias; \r\n                        <br />• Comércio Atacadista e Varejista; \r\n                        <br />• Comércio e Distribuição de Derivados de Petróleo e Gás Liquefeito de Petróleo; \r\n                        <br />• Condomínios e Edifícios; \r\n                        <br />• Confecções, Vestuário, Calçados e Artefatos de Couro; \r\n                        <br />• Construção Civil; \r\n                        <br />• Despachantes e Autoescolas; \r\n                        <br />• Distribuição Cinematográfica; \r\n                        <br />• Educação, Ensino e Formação Profissional; \r\n                        <br />• Empresas Jornalísticas; \r\n                        <br />• Energia Elétrica e Serviços de Utilidade Pública; \r\n                        <br />• Estacionamentos, Garagens e Lava Rápidos; \r\n                        <br />• Extração e Refino de Petróleo; \r\n                        <br />• Feiras, Eventos e Divulgação de Produtos; \r\n                        <br />• Fiação e Tecelagem; \r\n                        <br />• Gráficas e Editoras; \r\n                        <br />• Hospitais, Casas de Saúde e Serviços de Saúde; \r\n                        <br />• Indústria Cinematográfica e do Audiovisual e Serviços de Fotografia;\r\n                        <br />• Indústria de Joalheria; \r\n                        <br />• Indústria do Vidro; \r\n                        <br />• Indústria Metalúrgica; \r\n                        <br />• Indústria Química, Farmacêutica e de Plásticos; \r\n                        <br />• Indústria de Alimentos; \r\n                        <br />• Indústrias Extrativas; \r\n                        <br />• Lavanderias e Tinturarias; \r\n                        <br />• Limpeza Urbana, Passeio e Conservação do Meio Ambiente; \r\n                        <br />• Outras Indústrias; \r\n                        <br />• Outros Serviços; \r\n                        <br />• Papel, Papelão, Celulose e Embalagens; \r\n                        <br />• Publicidade e Propaganda; \r\n                        <br />• Radiodifusão e Televisão; \r\n                        <br />• Refeições Coletivas; \r\n                        <br />• Reparação, Manutenção e Conservação de Aparelhos Eletrônicos; \r\n                        <br />• Seguros Privados; \r\n                        <br />• Serviços a Terceiros e Fornecimento de Mão de Obra; \r\n                        <br />• Telecomunicações, Telemarketing, Processamento de Dados e Tecnologia da Informação; \r\n                        <br />• Transporte, Armazenagem e Comunicações; \r\n                        <br />• Venda, Compra, Locação e Administração de Imóveis; \r\n                        <br />• Vigilância e Segurança.\r\n                    </p>\r\n\r\n                </div>\r\n                <!-- / CATEGORIAS -->\r\n\r\n                <br />\r\n                \r\n                <!-- RESULTADOS DA NEGOCIAÇÃO COLETIVA -->\r\n                <div class=\"titulo_pagina\">Resultados da Negociação Coletiva GERAL</div>\r\n                <div class=\"corpo_texto\">\r\n                    <p>Depois de classificar os instrumentos negociados em suas respectivas atividades econômicas, a equipe do Salariômetro analisa e tabula 40 resultados da negociação coletiva, descritos a seguir.\r\n                    </p>\r\n                </div>\r\n\r\n                <div class=\"accordion_wrap\">\r\n                    <div class=\"accordion-item\">\r\n\r\n                    <!-- ACCORDION ABONO -->\r\n                    <div class=\"panel collapsed-bg\">\r\n                        <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#secao-01\" aria-expanded=\"true\">\r\n                            1. Abonos\r\n                        </a>\r\n                        <div id=\"secao-01\" class=\"collapse show\">\r\n                            <p>Abono é uma gratificação ou um prêmio pago em dinheiro pelas empresas aos seus empregados, que pode assumir as sete formas listadas abaixo. \r\n                            Geralmente, compõe-se de um valor integral, pago de forma única. O Salariômetro apenas registra a existência de cada tipo de abono, sem detalhar as respectivas características.\r\n                            </p>\r\n\r\n                            <p><b>1.1 Abono Aposentadoria;\r\n                            <br />1.2 Abono Assiduidade;\r\n                            <br />1.3 Abono Compensatório;\r\n                            <br />1.4 Abono Indenizatório;\r\n                            <br />1.5 Abono Produtividade;\r\n                            <br />1.6 Abono por Tempo de Serviço;\r\n                            <br />1.7 Outros Abonos.\r\n                            </b></p>\r\n                        </div>\r\n                    </div>  \r\n                    <!-- / ACCORDION ABONO -->\r\n\r\n                    <!-- ACCORDION ADICIONAL -->\r\n                    <div class=\"panel collapsed-bg\">\r\n                        <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#secao-02\" aria-expanded=\"false\">\r\n                            2. Adicional\r\n                        </a>\r\n                        <div id=\"secao-02\" class=\"collapse\">\r\n                            <p><b>2.1 Adicional Noturno.</b> A legislação trabalhista estabelece que a hora noturna <b>(a)</b> é mais curta (dura apenas 52 minutos e 30 segundos) e <b>(b)</b> deve ser paga com adicional de 20%. \r\n                            Nossa legislação criou, portanto, dois adicionais para a hora noturna de 60 minutos: \r\n                            </p>\r\n\r\n                            <p>a) O adicional em porcentagem sobre o salário diurno, que é 20% e que o Salariômetro designa por adicional estrito senso;\r\n                            <br />b) O adicional em minutos que equivale a 14,28% de 60 minutos.\r\n                            </p>\r\n\r\n                            <p>O resultado final é um acréscimo de 37,14%, resultante da multiplicação de <b>(a)</b> por <b>(b)</b>. A negociação coletiva pode modificar tanto a duração da hora noturna quanto o adicional previsto em lei. \r\n                            O Salariômetro tabula as seguintes informações:\r\n                            </p>\r\n\r\n                            <p>a) Existência de adicional noturno no instrumento negociado;\r\n                            <br />b) Duração da hora noturna negociada, em minutos;\r\n                            <br />c) Acréscimo à hora noturna para completar 60 minutos, em percentual;\r\n                            <br />d) Adicional noturno estrito senso, sobre a hora diurna;\r\n                            <br />e) Resultado do adicional noturno estrito senso aplicado sobre o adicional em minutos da hora noturna, expresso em percentual sobre a hora diurna.\r\n                            </p>\r\n\r\n                            <p><b>2.2 Adicional de Periculosidade.</b> É previsto em lei e se aplica a ambientes que expõem o trabalhador a riscos de sofrer acidentes na execução do seu serviço. \r\n                            O valor previsto em lei pode ser modificado na negociação coletiva e o Salariômetro registra 3 características deste adicional: (a) existência, (b) valor quando expresso em Reais e (c) valor quando expresso em porcentagem do salário.\r\n                            </p>\r\n\r\n                            <p><b>2.3 Adicional de Sobreaviso.</b> Sobreaviso é a situação na qual o empregado fica à disposição da empresa, sem trabalhar, mas podendo ser convocado para o serviço. \r\n                            O Salariômetro registra 3 características deste adicional: (a) existência, (b) valor quando expresso em Reais e (c) valor quando expresso em porcentagem do salário.\r\n                            </p>\r\n\r\n                            <p><b>2.4 Adicional por Tempo de Serviço.</b> É um incremento permanente no salário do trabalhador de acordo com o tempo em que trabalha na empresa. \r\n                            O Salariômetro registra 6 características neste caso:\r\n                            </p>\r\n\r\n                            <p>a) Existência;\r\n                            <br />b) Teto: existe limite máximo total em anos, expresso em porcentagem, valor em Reais, ou em uma faixa salarial máxima para a aplicação deste adicional;\r\n                            <br />c) Unidade em anos: informa a periodicidade com que o aumento é concedido;\r\n                            <br />d) Valor R$: o valor do adicional é dado em uma quantia em Reais definida e fixa;\r\n                            <br />e) Valor %: quando o incremento é dado em porcentagem do salário do trabalhador;\r\n                            <br />f) % sobre o piso: quando o incremento é dado em porcentagem do piso salarial ou salário normativo.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <!-- / ACCORDION ADICIONAL -->\r\n                    \r\n                    <!-- ACCORDION AUXÍLIOS -->\r\n                    <div class=\"panel collapsed-bg\">\r\n                        <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#secao-03\" aria-expanded=\"false\">\r\n                            3. Auxílios\r\n                        </a>\r\n                        <div id=\"secao-03\" class=\"collapse\">\r\n                            <p>Na categoria auxílios, são negociados diversos tipos de benefícios. \r\n                            Os auxílios listados abaixo assumem diversos formatos e em razão desta diversidade, o Salariômetro registra apenas sua existência nos instrumentos negociados, sem detalhar as respectivas características.\r\n                            </p>\r\n\r\n                            <p><b>3.1 Auxílio Creche;\r\n                            <br />3.2 Auxílio Doença / Invalidez;\r\n                            <br />3.3 Auxílio Educação;\r\n                            <br />3.4 Auxílio Funeral / Morte;\r\n                            <br />3.5 Auxílio Maternidade;\r\n                            <br />3.6 Auxílio Transporte.\r\n                            </b></p>\r\n                        </div>\r\n                    </div>\r\n                    <!-- / ACCORDION AUXÍLIOS -->\r\n\r\n                    <!-- ACCORDION BENEFÍCIOS -->\r\n                    <div class=\"panel collapsed-bg\">\r\n                        <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#secao-04\" aria-expanded=\"false\">\r\n                            4. Benefícios\r\n                        </a>\r\n                        <div id=\"secao-04\" class=\"collapse\">\r\n                            <p>O Salariômetro registra detalhadamente 6 tipos de benefícios descritos a seguir. \r\n                            São eles: (a) Benefícios de alimentação, (b) Aposentadoria complementar, (c) Plano odontológico, (d) Plano de saúde, (e) Seguro de vida, e (f) Convenio farmácia.\r\n                            </p>\r\n\r\n                            <p><b>4.1 Alimentação.</b> Este benefício assume as formas de:</p>\r\n                            <p>a) Vale refeição: utilizado para refeições diárias em restaurantes e lanchonetes; \r\n                            <br />b) Vale alimentação: utilizado para compra de suprimentos em supermercados;\r\n                            <br />c) Cesta básica: fornecimento dos produtos de cesta básica in natura;\r\n                            <br />d) Refeição em restaurante da empresa.      \r\n                            </p>\r\n\r\n                            <p>O Salariômetro registra estes benefícios em duas tabelas. \r\n                            A primeira aponta os valores de cada benefício e a segundo apresenta a eventual participação do empregado no custeio do benefício.\r\n                            </p>\r\n\r\n                            <p><b>4.2 Aposentadoria Complementar.</b> O Salariômetro registra apenas a existência deste benefício, devido à diversidade de formatos que pode apresentar. \r\n                            </p>\r\n\r\n                            <p><b>4.3 Plano de Saúde (Convênio ou Seguro).</b> Este benefício pode assumir o formato de oferta regular de serviços de saúde estruturados em convênios ou seguros, ajuda monetária para custeio de serviços e outros formatos. \r\n                            A tabulação registra 8 características desse benefício: \r\n                            </p>\r\n\r\n                            <p>a) Existência;\r\n                            <br />b) Participação do empregado no custeio;\r\n                            <br />c) Valor da participação em porcentagem da participação;\r\n                            <br />d) Base de incidência da participação do empregado;\r\n                            <br />e) Valor em Reais da participação (quando for o caso);\r\n                            <br />f) Extensão para dependentes;\r\n                            <br />g) Cobrança da extensão para dependentes;\r\n                            <br />h) Taxa por uso dos serviços médicos.                            \r\n                            </p>\r\n\r\n                            <p><b>4.4 Plano Odontológico (Convênio ou Seguro).</b> Este benefício inclui as despesas do empregador com tratamento odontológico e/ou plano de saúde odontológico de seus empregados. \r\n                            Inclui também os reembolsos de despesas com tratamento, como despesas de aparelhos ortodônticos, cirurgias bucais, etc. A tabulação registra 7 características deste benefício:\r\n                            </p>\r\n\r\n                            <p>a) Existência;\r\n                            <br />b) Participação do empregado no custeio;\r\n                            <br />c) Valor da participação em porcentagem da participação;\r\n                            <br />d) Base de incidência da participação do empregado;\r\n                            <br />e) Valor em Reais da participação (quando for o caso);\r\n                            <br />f) Extensão para dependentes;\r\n                            <br />g) Cobrança da extensão para dependentes.                            \r\n                            </p>\r\n\r\n                            <p><b>4.5 Seguro de Vida.</b> Benefício contratado coletivamente pela empresa a uma seguradora em favor dos empregados, com custeio total ou parcial a cargo da empresa. \r\n                            Cobre indenização por morte e invalidez e, às vezes, inclui custeio de funeral. O Salariômetro tabula 5 características deste benefício:\r\n                            </p>\r\n\r\n                            <p>a) Existência;\r\n                            <br />b) Participação do empregado;\r\n                            <br />c) Valor da participação do empregado em porcentagem;\r\n                            <br />d) Base de incidência da participação em porcentagem;\r\n                            <br />e) Valor da participação em Reais.                          \r\n                            </p>\r\n\r\n                            <p><b>4.6 Convênio Farmácia.</b> Benefício utilizado para aquisição de medicamentos em farmácias, negociado em um dos seguintes 4 formatos:\r\n                            </p>\r\n                            \r\n                            <p>a) Convênio: É um acordo firmado entre a empresa e uma farmácia (ou uma rede de farmácias) com o objetivo de facilitar a compra de remédios, produtos de higiene pessoal e cosméticos para os empregados;\r\n                            <br />b) Reembolso: A empresa reembolsa os empregados pelas compras efetuadas em farmácias de sua escolha, comprovados por receita médica;\r\n                            <br />c) Adiantamento: A empresa concede um adiantamento do salário ao empregado, mediante apresentação da receita médica e do orçamento da farmácia, para a aquisição dos medicamentos;\r\n                            <br />d)Vale Farmácia: Benefício similar ao vale alimentação mensal, é um crédito mensal disponibilizado ao funcionário para compras em farmácias e drogarias.\r\n                            </p>\r\n\r\n                            <p>Às vezes, o benefício é operado pelo próprio sindicato dos trabalhadores, como prestação de serviços aos representados, mas sempre custeado pela empresa. \r\n                            O Salariômetro examina e tabula 13 características deste benefício:\r\n                            </p>\r\n\r\n                            <p>a) Existência;\r\n                            <br />b) Formato: convênio, reembolso, adiantamento ou vale farmácia;\r\n                            <br />c) Participação do empregado;\r\n                            <br />d) Valor da participação em porcentagem as compras efetuadas, desconto mensalmente no contracheque;\r\n                            <br />e) Participação diferente para sindicalizados;\r\n                            <br />f) Existência de limite mensal; \r\n                            <br />g) Limite mensal expresso em Reais;\r\n                            <br />h) Limite mensal expresso em porcentagem do salário;\r\n                            <br />i) Limite mensal expresso em porcentagem do piso salárial;\r\n                            <br />j) Existência de teto salarial para o limite mensal;\r\n                            <br />k) Existência de franquia no formato de convênio; \r\n                            <br />l) Financiamento da despesa pela empresa;\r\n                            <br />m) Número de parcelas mensais do financiamento.   \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <!-- / ACCORDION BENEFÍCIOS -->\r\n                    \r\n                    <!-- ACCORDION CONTRIBUIÇÕES PARA SINDICATOS DE EMPRESAS -->\r\n                    <div class=\"panel collapsed-bg\">\r\n                        <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#secao-05\" aria-expanded=\"false\">\r\n                            5. Contribuições para Sindicatos de Empresas\r\n                        </a>\r\n                        <div id=\"secao-05\" class=\"collapse\">\r\n                            <p>São contribuições pagas pelas empresas aos sindicatos que as representam. \r\n                            Nos instrumentos negociados há 6 expressões que as caracterizam e o Salariômetro as adotou para classificá-las. \r\n                            Abaixo descrevemos resumidamente os tipos de contribuição sindical patronal:\r\n                            </p>\r\n\r\n                            <p><b>5.1 Associativa.</b> Contribuição dos associados ao sindicato; \r\n                            <br /><b>5.2 Confederativa.</b> Destinada para custear o sistema sindical confederativo;\r\n                            <br /><b>5.3 Negocial.</b> Destinada ao custeio da representação nas negociações coletivas;\r\n                            <br /><b>5.4 Sindical.</b> Conhecida antigamente como Imposto Sindical. É prevista na CLT e na Constituição;\r\n                            <br /><b>5.5 Por Serviços (antigo Imposto Sindical).</b> Pagamento de serviços intermediados pelo sindicato;\r\n                            <br /><b>5.6 Outras.</b> Contraparte não previstas nos 5 tipos acima.\r\n                            </p>\r\n\r\n                            <p>O Salariômetro tabula 7 características das contribuições sindicais patronais:\r\n                            </p>\r\n\r\n                            <p>a) Existência;\r\n                            <br />b) Valor anual em Reais;\r\n                            <br />c) Vinculação do valor anual: por número de empregados, por faixas de número de empregados, por faixas de capital social;\r\n                            <br />d) Valor anual em porcentagem sobre a folha de pagamento;\r\n                            <br />e) Manifestação de oposição (passiva ou ativa);\r\n                            <br />f) Valor diferente para sócios;\r\n                            <br />g) No caso de contribuição por serviços, o Salariômetro tabula os tipos de benefícios oferecidos pelo sindicato: (plano de saúde, plano odontológico, seguro de vida, auxílio funeral, farmácia, maternidade, creche, outros).     \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <!-- / ACCORDION CONTRIBUIÇÕES PARA SINDICATOS DE EMPRESAS -->\r\n\r\n                    <!-- ACCORDION CONTRIBUIÇÕES PARA SINDICATOS DE TRABALHADORES -->\r\n                    <div class=\"panel collapsed-bg\">\r\n                        <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#secao-06\" aria-expanded=\"false\">\r\n                            6. Contribuições para Sindicatos de Trabalhadores\r\n                        </a>\r\n                        <div id=\"secao-06\" class=\"collapse\">\r\n                            <p>São contribuições pagas pelos trabalhadores aos sindicatos que os representam. \r\n                            Nos instrumentos negociados há 6 expressões que as caracterizam e o Salariômetro as adotou para classificá-las. Abaixo descrevemos resumidamente os tipos de contribuição sindical profissional:\r\n                            </p>\r\n\r\n                            <p><b>6.1 Associativa.</b> Contribuição dos associados ao sindicato; \r\n                            <br /><b>6.2 Confederativa.</b> Destinada para custear o sistema sindical confederativo;\r\n                            <br /><b>6.3 Negocial.</b> Destinada ao custeio da representação nas negociações coletivas;\r\n                            <br /><b>6.4 Sindical (antigo Imposto Sindical).</b> Conhecida antigamente como Imposto Sindical. É prevista na CLT e na Constituição;\r\n                            <br /><b>6.5 Por Serviços.</b> Pagamento de serviços intermediados pelo sindicato;\r\n                            <br /><b>6.6 Outras.</b> Contraparte não previstas nos 5 tipos acima.\r\n                            </p>\r\n\r\n                            <p>O Salariômetro tabula 7 características das contribuições sindicais profissionais:\r\n                            </p>\r\n\r\n                            <p>a) Existência;\r\n                            <br />b) Valor anual em Reais;\r\n                            <br />c) Vinculação do valor anual: por número de empregados, por faixas de número de empregados, por faixas de capital social;\r\n                            <br />d) Valor anual em porcentagem sobre a folha de pagamento;\r\n                            <br />e) Manifestação de oposição (passiva ou ativa);\r\n                            <br />f) Valor diferente para sócios;\r\n                            <br />g) No caso de contribuição por serviços, o Salariômetro tabula os tipos de benefícios oferecidos pelo sindicato: (plano de saúde, plano odontológico, seguro de vida, auxílio funeral, farmácia, maternidade, creche, outros).     \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <!-- / ACCORDION CONTRIBUIÇÕES PARA SINDICATOS DE TRABALHADORES -->\r\n                    \r\n                    <!-- ACCORDION JORNADA DE TRABALHO -->\r\n                    <div class=\"panel collapsed-bg\">\r\n                        <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#secao-07\" aria-expanded=\"false\">\r\n                            7. Jornada de Trabalho\r\n                        </a>\r\n                        <div id=\"secao-07\" class=\"collapse\">\r\n                            <p>O Salariômetro analisa dois tipos de cláusulas que contemplam a jornada de trabalho: o adicional de horas extraordinárias (hora extra) e o banco de horas. \r\n                            Apesar de haver legislação específica que trata dos dois temas, eles são também temas recorrentes na mesa de negociação e o Salariômetro tenta captar os resultados que dela emergem.\r\n                            </p>\r\n\r\n                            <p><b>7.1 Adicional de Horas Extras</b>. A legislação prevê uma jornada máxima diária e semanal e também determina o adicional que deve ser pago quando há horas extraordinárias (50%). \r\n                            A negociação coletiva pode definir adicionais maiores e também adicionais diferenciados para domingos e feriados. O Salariômetro tabula 4 características:\r\n                            </p>\r\n\r\n                            <p>a) Existência;\r\n                            <br />b) Percentual adicional em dias úteis;\r\n                            <br />c) Percentual adicional aos sábados;\r\n                            <br />d) Percentual adicional em domingos e feriados.\r\n                            </p>\r\n\r\n                            <p><b>7.2 Bancos de Horas.</b> O banco de horas é também regulado na legislação, mas a negociação coletiva o contempla com bastante frequência.\r\n                            O Salariômetro tabula 5 aspectos do banco de horas:\r\n                            </p>\r\n\r\n                            <p>a) Prazo para a compensação das horas acumuladas pelo trabalhador, em meses;\r\n                            <br />b) Limite para a quantidade de horas acumuladas;\r\n                            <br />c) Taxa de conversão das horas acumuladas (podendo haver diferentes taxas para dias úteis, domingos e feriados);\r\n                            <br />d) Tratamento para as horas acumuladas e não compensadas na vigência do contrato de trabalho;\r\n                            <br />e) Tratamento para as horas acumuladas e não compensadas na rescisão do contrato de trabalho.                            \r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <!-- / ACCORDION JORNADA DE TRABALHO -->\r\n\r\n                    <!-- ACCORDION PLR -->\r\n                    <div class=\"panel collapsed-bg\">\r\n                        <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#secao-08\" aria-expanded=\"false\">\r\n                            8. Salários e Remuneração Variável\r\n                        </a>\r\n                        <div id=\"secao-08\" class=\"collapse\">\r\n                            <p>A remuneração é contemplada no Salariômetro em três aspectos: \r\n                                <br />&emsp;<a [routerLink]=\"['/negociacao-coletiva-geral/salarios/reajuste-salarial']\" style=\"font-weight: bold; color: #33a9f4;\"> • Reajuste Salarial </a>\r\n                                <br />&emsp;<a [routerLink]=\"['/negociacao-coletiva-geral/salarios/piso-salarial']\" style=\"font-weight: bold; color: #33a9f4;\"> • Pisos Salarial </a>\r\n                                <br />&emsp;<a [routerLink]=\"['/negociacao-coletiva-geral/salarios/remuneracao-variavel']\" style=\"font-weight: bold; color: #33a9f4;\"> • Remuneração Variável / PLR (Participação nos Lucros ou Resultados)</a>\r\n                            </p>\r\n\r\n                            <p><b>8.1 Reajuste Salarial.</b> O Salariômetro tabula três aspectos dos reajustes salariais negociados:\r\n                            </p>\r\n\r\n                            <p>a) Percentual de reajuste;\r\n                            <br />b) Teto de aplicação do percentual de reajuste, em Reais;\r\n                            <br />c) Escalonamento da aplicação do reajuste (reajuste parcelado).    \r\n                            </p>\r\n\r\n                            <p><b>8.2 Piso Salarial.</b> O Salariômetro tabula o piso salarial negociado, levando em conta a jornada de trabalha à qual é aplicado. \r\n                            As jornadas e os respectivos pisos são tabulados para os seguintes casos:\r\n                            </p>\r\n\r\n                            <p>a) 40-44 horas semanais;\r\n                            <br />b) 36 horas semanais;\r\n                            <br />c) 30 horas semanais;\r\n                            <br />d) 20-26 horas semanais;\r\n                            <br />e) Piso diário;\r\n                            <br />f) Piso por hora;\r\n                            <br />g) Piso semanal;\r\n                            <br />h) Piso do regime 12 x 36;\r\n                            <br />i) Piso de hora-aula (para professores);\r\n                            <br />j) Outras unidades de piso.                            \r\n                            </p>\r\n\r\n                            <p><b>8.3 Participação nos Lucros ou Resultados – PLR.</b> Este tipo de cláusula so pode ser utilizado pelas empresas por meio de negociação coletiva com os representantes dos empregados assistidos pelos sindicatos ou diretamente com o sindicato. \r\n                            Trata-se, portanto, de um tema dependente de negociação coletiva e o Salariômetro tem acompanhado sua evolução, contemplando os seguintes aspectos dos programas negociados:\r\n                            </p>\r\n\r\n                            <p>a) Tipo de participação (no lucro, nos resultados, ou em ambos);\r\n                            <br />b) Quantidade de programas negociados;\r\n                            <br />c) Expressão do bônus (reais, porcentagem do salário, misto);\r\n                            <br />d) Valor máximo quando expresso em Reais;\r\n                            <br />e) Valor máximo quando expresso em porcentagem do salário;\r\n                            <br />f) Existência de antecipação do bônus;\r\n                            <br />g) Critérios de participação (lucro, produção, qualidade, faturamento, absenteísmo/disciplina, tempo de serviço, segurança/acidentes, fidelização de clientes, cumprimento de prazos, outros critérios);\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <!-- / ACCORDION PLR -->\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- / RESULTADOS DA NEGOCIAÇÃO COLETIVA -->\r\n\r\n                <br />\r\n\r\n                <!-- PESQUISA SALARIAL -->\r\n                <div class=\"titulo_pagina\">Pesquisa Salarial</div>\r\n                <div class=\"corpo_texto\">\r\n                    <p>Na Pesquisa Salarial, a Fipe calcula os salários médios e medianos do conjunto de trabalhadores admitidos e desligados nos últimos seis \r\n                        meses, para cada uma das ocupações existentes na CBO – Classificação Brasileira de Ocupações. Os resultados são desagregados e apresentados \r\n                        em três formatos: por quartil, por faixa etária e por escolaridade. O assinante pode granular sua busca para Regiões, Unidades da Federação e Municípios. \r\n                        A base de dados utilizada é o CAGED – Cadastro de Empregados e Desempregados, atualizada e disponibilizada mensalmente pelo Ministério do Trabalho e Emprego.\r\n                    </p>\r\n                </div>\r\n                <!-- / PESQUISA SALARIAL -->\r\n\r\n                <br />\r\n\r\n                <!-- INDICADORES DO MERCADO DE TRABALHO -->\r\n                <div class=\"titulo_pagina\">Indicadores do Mercado de Trabalho</div>\r\n                <div class=\"corpo_texto\">\r\n                    <p>Página em construção.\r\n                    </p>\r\n                </div>\r\n                <!-- / INDICADORES DO MERCADO DE TRABALHO -->\r\n\r\n                <br />\r\n                <br />\r\n                \r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"lateral\">\r\n\r\n            <!-- LINKS LATERAL -->\r\n            <h4 class=\"lateral_titulo\">VEJA TAMBÉM</h4>\r\n            <div class=\"lateral_link\" [routerLink]=\"['/sobre/quem-somos']\">Quem Somos</div>\r\n            <div class=\"lateral_link fixo\" [routerLink]=\"['/sobre/metodologia']\">Metodologia</div>\r\n            <div class=\"lateral_link\" [routerLink]=\"['/sobre/boletim']\">Boletim Mensal</div>\r\n            <div class=\"lateral_link\" [routerLink]=\"['/sobre/planos']\">Planos de Assinatura</div>\r\n            <!-- / LINKS LATERAL -->\r\n\r\n            <!-- CALL TO ACTION -->\r\n            <div class=\"lateral_caixa_azul\">\r\n                <h4 class=\"lateral_titulo_01\">Mais conteúdo para você</h4>\r\n                Tenha acesso aos conteúdos regionais e setoriais\r\n                <button type=\"button\" class=\"btn btn-primary\" style=\"margin-top: 10px\" [routerLink]=\"['/sobre/planos']\">PLANOS DE ASSINATURA</button>\r\n            </div>\r\n            <!-- / CALL TO ACTION -->\r\n\r\n            <!-- CONTACT -->\r\n            <div class=\"lateral_caixa_cinza\">\r\n                <h4 class=\"lateral_titulo_02\">Precisa de ajuda?</h4>\r\n                Para dúvidas ou sugestões, envie um e-mail para:\r\n                <br />\r\n                <b>salarios@fipe.org.br</b>\r\n            </div>\r\n            <!-- CONTACT -->\r\n\r\n        </div>\r\n\r\n        <app-login-modal #login></app-login-modal>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/sobre-salariometro/metodologia/metodologia.component.scss":
/***/ (function(module, exports) {

module.exports = ".topo {\n  background-image: url(\"/assets/topos/metodologia.png\"); }\n\n.app-nc-metodologia {\n  margin-left: auto;\n  margin-right: auto;\n  width: 1149px; }\n\n.app-nc-metodologia .formulario {\n    float: left;\n    padding-right: 40px;\n    width: calc(100% - 240px);\n    font-size: 14px;\n    margin-top: 30px; }\n\n.app-nc-metodologia .lateral {\n    float: left;\n    margin-top: 30px;\n    width: 240px; }\n\n.numeracao {\n  color: #3c3c3c;\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 30px;\n  position: relative; }\n\n.subtitulo_pagina {\n  color: #3c3c3c;\n  margin-bottom: 15px;\n  margin-top: 10px;\n  font-size: 20px;\n  position: relative;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/components/sobre-salariometro/metodologia/metodologia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sobre_MetodologiaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Sobre_MetodologiaComponent = (function () {
    function Sobre_MetodologiaComponent() {
    }
    Sobre_MetodologiaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sobre-metodologia',
            template: __webpack_require__("./src/app/components/sobre-salariometro/metodologia/metodologia.component.html"),
            styles: [__webpack_require__("./src/app/components/sobre-salariometro/metodologia/metodologia.component.scss")]
        })
    ], Sobre_MetodologiaComponent);
    return Sobre_MetodologiaComponent;
}());



/***/ }),

/***/ "./src/app/components/sobre-salariometro/planos/cadastro.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cadastro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_share__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/share.js");


var Cadastro = (function () {
    function Cadastro() {
        this.pessoal_hash = '';
        this.pessoal_nmCliente = '';
        this.pessoal_cdDocumento = '1';
        this.pessoal_nuDocumento = '';
        this.pessoal_dsOcupacao = '';
        this.pessoal_dsOrganizacao = '';
        this.pessoal_dsCEP = '';
        this.pessoal_dsEndereco = '';
        this.pessoal_dsNumero = '';
        this.pessoal_dsComplemento = '';
        this.pessoal_dsBairro = '';
        this.pessoal_dsMunicipio = '';
        this.pessoal_dsEstado = '';
        this.pessoal_nuTelefone = '';
        this.pessoal_dsEmail = '';
        this.pessoal_cdSenha = '';
        this.pessoal_icTermo = false;
        this.produto_selecionado = [];
        this.alteracao_produto1_municipioTodos = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this.alteracao_produto1_municipio = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this.alteracao_produto1_idVigencia = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this.alteracao_produto2_ufTodos = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this.alteracao_produto2_uf = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this.alteracao_produto2_atividadeTodos = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this.alteracao_produto2_negociacaoPersonalizada = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this.alteracao_produto2_atividade = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this.produto1_cdUf = null;
        this.produto1_cdMunicipio = null;
        this._produto1_idVigencia = null;
        this._produto1_municipioTodos = '1';
        this._produto1_municipioSelecionados = [];
        this.produto1_valor = 0;
        this.produto2_cdUf = null;
        this.produto2_idAtividade = null;
        this._produto2_ufTodos = '1';
        this._produto2_ufSelecionados = [];
        this._produto2_atividadeTodos = '1';
        this._produto2_negociacaoPersonalizada = false;
        this._produto2_atividadeSelecionados = [];
        this.produto2_idVigencia = 3;
        this.produto2_valor = 0;
    }
    Object.defineProperty(Cadastro.prototype, "produto1_municipioTodos", {
        get: function () {
            return this._produto1_municipioTodos;
        },
        set: function (v) {
            this._produto1_municipioTodos = v;
            this.alteracao_produto1_municipioTodos.next(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadastro.prototype, "produto1_municipioSelecionados", {
        get: function () {
            return this._produto1_municipioSelecionados;
        },
        set: function (v) {
            this._produto1_municipioSelecionados = v;
            this.alteracao_produto1_municipio.next(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadastro.prototype, "produto1_idVigencia", {
        get: function () {
            return this._produto1_idVigencia;
        },
        set: function (v) {
            this._produto1_idVigencia = v;
            this.alteracao_produto1_idVigencia.next(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadastro.prototype, "produto2_ufTodos", {
        get: function () {
            return this._produto2_ufTodos;
        },
        set: function (v) {
            this._produto2_ufTodos = v;
            this.alteracao_produto2_ufTodos.next(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadastro.prototype, "produto2_ufSelecionados", {
        get: function () {
            return this._produto2_ufSelecionados;
        },
        set: function (v) {
            this._produto2_ufSelecionados = v;
            this.alteracao_produto2_uf.next(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadastro.prototype, "produto2_atividadeTodos", {
        get: function () {
            return this._produto2_atividadeTodos;
        },
        set: function (v) {
            this._produto2_atividadeTodos = v;
            this.alteracao_produto2_atividadeTodos.next(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadastro.prototype, "produto2_negociacaoPersonalizada", {
        get: function () {
            return this._produto2_negociacaoPersonalizada;
        },
        set: function (v) {
            this._produto2_negociacaoPersonalizada = v;
            this.alteracao_produto2_negociacaoPersonalizada.next(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadastro.prototype, "produto2_atividadeSelecionados", {
        get: function () {
            return this._produto2_atividadeSelecionados;
        },
        set: function (v) {
            this._produto2_atividadeSelecionados = v;
            this.alteracao_produto2_atividade.next(v);
        },
        enumerable: true,
        configurable: true
    });
    return Cadastro;
}());



/***/ }),

/***/ "./src/app/components/sobre-salariometro/planos/carrinho.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Carrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RetornoAssinar; });
var Carrinho = (function () {
    function Carrinho() {
        this.idProduto = 0;
        this.dsProduto = '';
        this.valor = 0;
    }
    return Carrinho;
}());

var RetornoAssinar = (function () {
    function RetornoAssinar() {
        this.idPedido = '';
        this.confirmacao = false;
        this.mensagem = '';
    }
    return RetornoAssinar;
}());



/***/ }),

/***/ "./src/app/components/sobre-salariometro/planos/municipio-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MunicipioFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MunicipioFilterPipe = (function () {
    function MunicipioFilterPipe() {
    }
    MunicipioFilterPipe.prototype.transform = function (items, valor) {
        return items.filter(function (item) { return item.cdMicro == valor; });
    };
    MunicipioFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'municipio_filter'
        })
    ], MunicipioFilterPipe);
    return MunicipioFilterPipe;
}());



/***/ }),

/***/ "./src/app/components/sobre-salariometro/planos/planos.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BANNER -->\r\n<div class=\"topo\">\r\n    <div class=\"topo-titulo\">PLANOS DE ASSINATURA</div>\r\n    <div class=\"topo-nav\">\r\n        <nav aria-label=\"breadcrumb\">\r\n            <ol class=\"breadcrumb\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a [routerLink]=\"['/home']\">HOME</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">PLANOS DE ASSINATURA</li>\r\n            </ol>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<!-- / BANNER -->\r\n\r\n<div class=\"content\">\r\n    <div class=\"app-sobre-planos\">\r\n        <div class=\"formulario\" n>\r\n\r\n            <!-- TITLE AND CONTENT-->\r\n            <div class=\"corpo_texto\" *ngIf=\"etapa === 1\">\r\n                <p>Tenha acesso aos dados regionais e setoriais do Salariômetro ao contratar um de nossos planos.\r\n                    Para calcular o valor da sua assinatura, preencha o formulário abaixo. \r\n                    Quanto mais opções você selecionar, menor será o custo individual dos itens.\r\n                </p>\r\n\r\n                <p>Você pode fazer assinaturas para os Resultados da Negociação Coletiva Geral, Negociação Coletiva Customizável e para a Pesquisa Salarial. Veja como:</p>\r\n                <p><b>Negociação Coletiva Geral:</b> escolha uma UF e uma atividade, pelo menos. A assinatura de uma atividade dá acesso aos resultados da atividade escolhida. Para ter acesso aos resultados do setor ao qual a atividade pertence, é preciso selecionar todas as atividades do setor. <br />Exemplo: se a escolha for São Paulo e Indústria Química, a assinatura dá acesso aos resultados da Indústria Química. Para ter acesso aos resultados do setor Indústria, é preciso selecionar todas as atividades deste setor.</p>\r\n                <p style=\"font-size: 18px;\"><strong>Veja uma <a [routerLink]=\"['/negociacao-coletiva-geral-demo']\" style=\"color: #33a9f4; font-weight: bold;\">demonstração</a> com nossos dados de 2018.</strong></p>\r\n                <br />\r\n                <p><b>Negociação Coletiva Customizável:</b> este produto utiliza os mesmos dados que alimentam a <a [routerLink]=\"['/negociacao-coletiva-geral']\" style=\"color: #33a9f4; font-weight: bold;\">Negociação Coletiva Geral</a> e\r\n                    também pode ser adquirido por meio de um <a [routerLink]=\"['/sobre/planos']\" style=\"color: #33a9f4; font-weight: bold;\">Plano de Assinatura</a>. A diferença\r\n                    está no nível de detalhamento das informações, que são apresentadas em quatro conjuntos na mesma assinatura.\r\n                </p>\r\n        \r\n                <table class=\"table custom-table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th class=\"first-column\">Âmbito das negociações</th>\r\n                        <th>Resultados disponibilizados</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <td class=\"first-column\">Assinante</td>\r\n                        <td>\r\n                            Negociações conduzidas\r\n                            pelo próprio assinante\r\n                            (empresa ou sindicato patronal)\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"first-column\">Mesmos sindicatos laborais</td>\r\n                        <td>\r\n                            Negociações dos sindicatos laborais que\r\n                            representam os empregados do assinante, com\r\n                            outras empresas ou outros sindicatos patronais\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"first-column\">Referências empresariais</td>\r\n                        <td>\r\n                            Negociações conduzidas por empresas ou \r\n                            sindicatos patronais de interesse do assinante\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td class=\"first-column\">Referências laborais</td>\r\n                        <td>\r\n                            Negociações de outros sindicatos laborais de\r\n                            interesse do assinante\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                  <br />\r\n                <p><b>Pesquisa Salarial:</b> escolha pelo menos um município. A assinatura dá acesso a todos os municípios da microrregião à qual o município pertence.<br /><b>Exemplo:</b> se a escolha for o município de Campo Limpo Paulista, a assinatura dá acesso aos municípios de Campo Limpo Paulista, Itupeva, Jundiaí, Louveira e Várzea Paulista, que compõem a microrregião que compõem a microrregião de Jundiaí e são consideradas como pertencentes ao mesmo mercado de trabalho microrregional.</p>\r\n                <p style=\"font-size: 18px;\"><strong>Veja uma <a [routerLink]=\"['/pesquisa-salarial-demo']\" style=\"color: #33a9f4; font-weight: bold;\">demonstração</a> com nossos dados de 2018.</strong></p><br />\r\n                <p><b>Preço:</b> para saber o preço da assinatura pretendida, vá até o fim do processo e o sistema informará o valor. No período de lançamento, por tempo limitado, os preços informados estão com um desconto promocional.</p><br />\r\n                <p><b>Solicitações Especiais e Consultoria:</b> O Salariômetro pode formatar serviços para atender demandas não padronizadas de seus clientes. Entre em contato conosco e explique o serviço que precisa e tentaremos desenhar uma solução para atendê-lo.\r\n            </div>\r\n            <!-- / TITLE AND CONTENT-->\r\n\r\n            <!-- PROGRESS BAR -->\r\n            <div class=\"barra-progresso\">\r\n                <div [class]=\"'img ' + (etapa >= 1 ? 'img12' : 'img11')\"></div>\r\n                <div [class]=\"'img-separator ' + (etapa >= 2 ? 'img-separator2' : 'img-separator1')\"></div>\r\n                <div [class]=\"'img ' + (etapa >= 2 ? 'img22' : 'img21')\"></div>\r\n                <div [class]=\"'img-separator ' + (etapa >= 3 ? 'img-separator2' : 'img-separator1')\"></div>\r\n                <div [class]=\"'img ' + (etapa >= 3 ? 'img32' : 'img31')\"></div>\r\n                <div [class]=\"'img-separator ' + (etapa >= 4 ? 'img-separator2' : 'img-separator1')\"></div>\r\n                <div [class]=\"'img ' + (etapa >= 4 ? 'img42' : 'img41')\"></div>\r\n            </div>\r\n            <!-- / PROGRESS BAR -->\r\n\r\n            <!-- PRODUCT SELECTION -->\r\n            <div class=\"etapa\" *ngIf=\"etapa === 1\" [formGroup]=\"form_etapa1\">\r\n                <div class=\"etapa_texto\">Selecione abaixo um ou mais produtos que você deseja adquirir:</div>\r\n                <div [class]=\"'product01'\">\r\n                    <div class=\"product_name\" >Negociação Coletiva Geral<br /></div><br />\r\n                    <div [class]=\"'product_img01'\"></div><br /><br />\r\n                    <button [class]=\"'dvm-button'\" (click)=\"fnSelecionarProduto(2)\">Assine agora</button>\r\n                </div>\r\n                <div [class]=\"'product02'\">\r\n                    <div class=\"product_name\"  style=\"margin-top: 5px;\">Negociação Coletiva Customizável</div><br />\r\n                    <div [class]=\"'product_img02'\"></div><br /><br />\r\n                    <button [class]=\"'dvm-button'\" style=\"margin-left: 20px;\" (click)=\"fnSelecionarProduto(3)\">Saiba mais</button>\r\n                </div>\r\n                <div [class]=\"'product03'\">\r\n                    <div class=\"product_name\" style=\"margin-top: 10px;\">Pesquisa Salarial<br /></div><br /><br />\r\n                    <div [class]=\"'product_img03'\"></div><br /><br />\r\n                    <button [class]=\"'dvm-button'\" (click)=\"fnSelecionarProduto(1)\">Assine agora</button>\r\n                </div>\r\n                <div [class]=\"'product04'\">\r\n                    <div class=\"product_name\" style=\"margin-top: 10px; margin-left: -10px; margin-right: -10px;\">Solicitações Especiais e Consultoria<br /></div>\r\n                    <div [class]=\"'product_img04'\"></div> <br /><br />\r\n                    <button [class]=\"'dvm-button'\" style=\"margin-left: 24px;\" (click)=\"fnSelecionarProduto(4)\">Saiba mais</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"validacao\" [innerHtml]=\"form_etapa1.get('produtos').invalid && (form_etapa1.get('produtos').dirty || form_etapa1.get('produtos').touched) ? 'Selecione pelo menos um produto para prosseguir.' : '&nbsp;'\"></div>\r\n            <!-- / PRODUCT SELECTION -->\r\n\r\n            <!-- NEGOCIAÇÃO COLETIVA -->\r\n            <div class=\"etapa\" *ngIf=\"etapa === 2 && etapa_produto == 2\" [formGroup]=\"form_etapa2_2\">\r\n                <div class=\"item_texto\">Negociação Coletiva Geral</div>\r\n                <div class=\"accordion-item\">\r\n\r\n                    <!-- seleção estado -->\r\n                    <div class=\"panel collapsed-bg\">\r\n                        <a data-toggle=\"collapse\" href=\"#secao-nc-01\" aria-expanded=\"true\">\r\n                            Selecione o(s) estado(s) que você deseja consultar\r\n                        </a>\r\n                        <div id=\"secao-nc-01\" class=\"collapse show\">\r\n                            <div class=\"form-check form-check-inline opcao_texto\">\r\n                                <input class=\"form-check-input\" type=\"radio\" id=\"produto2_cbx1\" value=\"1\" [(ngModel)]=\"item.produto2_ufTodos\" formControlName=\"ufTodos\">\r\n                                <label class=\"form-check-label\" for=\"produto2_cbx1\">Quero assinar todos os estados</label>\r\n                            </div>\r\n                            <div class=\"form-check form-check-inline opcao_texto\">\r\n                                <input class=\"form-check-input\" type=\"radio\" id=\"produto2_cbx2\" value=\"0\" [(ngModel)]=\"item.produto2_ufTodos\" formControlName=\"ufTodos\">\r\n                                <label class=\"form-check-label\" for=\"produto2_cbx2\">Quero escolher o(s) estado(s)</label>\r\n                            </div>\r\n                            <div *ngIf=\"item.produto2_ufTodos === '0'\">\r\n                                <div class=\"etapa_texto\">\r\n                                    <div class=\"col-12\">\r\n                                        <h6 style=\"margin-left: 25px;\">Selecione abaixo o(s) estado(s) desejados(s). Caso queira remover algum item, clique em \"Excluir\".</h6>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\" style=\"margin-top: 20px; margin-left: 25px\" [formGroup]=\"form_etapa2_2_1\">\r\n                                    <div class=\"col-8\">\r\n                                        <kendo-combobox [(ngModel)]=\"item.produto2_cdUf\" [data]=\"lista_uf_filtro1\" [filterable]=\"true\" [placeholder]=\"'Estado'\" [valuePrimitive]=\"true\"\r\n                                            (filterChange)=\"cmbProduto2UF_Filter($event)\" (valueChange)=\"cmbProduto2UF_Changed($event)\" textField=\"nmUf\" valueField=\"cdUf\"\r\n                                            formControlName=\"cdUf\" style=\"width: 100%\"></kendo-combobox>\r\n                                        <div class=\"validacao\" *ngIf=\"form_etapa2_2_1.get('cdUf').invalid && (form_etapa2_2_1.get('cdUf').dirty || form_etapa2_2_1.get('cdUf').touched)\">Campo obrigatório</div>\r\n                                    </div>\r\n                                    <div class=\"col-2\">\r\n                                        <button type=\"button\" class=\"btn btn-primary-confirm\" style=\"margin-top:2px; margin-left:40px;\" (click)=\"fnProduto2Adicionar_UF()\">ADICIONAR</button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"validacao\" style=\"margin-left: 25px\" *ngIf=\"etapa_erro === 1\">Estado já adicionado.</div>\r\n                                <div class=\"form-group row\">\r\n                                    <div class=\"col-12\">\r\n                                        <ul>\r\n                                            <li class=\"pg\" *ngFor=\"let l of item.produto2_ufSelecionados\">\r\n                                                {{l.nmUf}}\r\n                                                <span style=\"cursor: pointer; color:#20a1fa; font-weight: bold; float:right; padding-right:80px\" (click)=\"fnProduto2Remover_UF(l.cdUf)\"><img src=\"/assets/icone-excluir.png\" height=\"10px\" width=\"10px\"> Excluir</span>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"validacao\" *ngIf=\"item.produto2_ufTodos === '0' && form_etapa2_2.get('ufSelecionados').invalid && (form_etapa2_2.get('ufSelecionados').dirty || form_etapa2_2.get('ufSelecionados').touched)\">Selecione pelo menos um estado.</div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- / seleção estado -->\r\n\r\n                    <!-- seleção atividade -->\r\n                    <div class=\"panel collapsed-bg\">\r\n                        <a data-toggle=\"collapse\" href=\"#secao-nc-02\" aria-expanded=\"true\">\r\n                            Selecione a(s) atividade(s) que você deseja consultar\r\n                        </a>\r\n                        <div id=\"secao-nc-02\" class=\"collapse show\">\r\n                            <div class=\"form-check form-check-inline opcao_texto\">\r\n                                <input class=\"form-check-input\" type=\"radio\" id=\"produto2_cbx3\" value=\"1\" [(ngModel)]=\"item.produto2_atividadeTodos\" formControlName=\"atividadeTodos\">\r\n                                <label class=\"form-check-label\" for=\"produto2_cbx3\">Quero assinar todas as atividades</label>\r\n                            </div>\r\n                            <div class=\"form-check form-check-inline opcao_texto\">\r\n                                <input class=\"form-check-input\" type=\"radio\" id=\"produto2_cbx4\" value=\"0\" [(ngModel)]=\"item.produto2_atividadeTodos\" formControlName=\"atividadeTodos\">\r\n                                <label class=\"form-check-label\" for=\"produto2_cbx4\">Quero escolher a(s) atividade(s)</label>\r\n                            </div>\r\n                            <div *ngIf=\"item.produto2_atividadeTodos === '0'\">\r\n                                <div class=\"form-group row\">\r\n                                    <div class=\"etapa_texto\">\r\n                                        <h6 style=\"margin-left: 25px;\">Selecione abaixo a(s) atividade(s) desejada(s). Caso queira remover algum item, clique em \"Excluir\".</h6>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\" style=\"margin-top: 20px; margin-left: 25px\" [formGroup]=\"form_etapa2_2_2\">\r\n                                    <div class=\"col-8\">\r\n                                        <kendo-combobox [(ngModel)]=\"item.produto2_idAtividade\" [data]=\"lista_atividade_filtro\" [filterable]=\"true\" [placeholder]=\"'Atividade'\" [valuePrimitive]=\"true\"\r\n                                            (filterChange)=\"cmbProduto2Atividade_Filter($event)\" (valueChange)=\"cmbProduto2Atividade_Changed($event)\" textField=\"dsAtividade\" valueField=\"idAtividade\"\r\n                                            formControlName=\"idAtividade\" style=\"width: 100%\"></kendo-combobox>\r\n                                        <div class=\"validacao\" *ngIf=\"form_etapa2_2_2.get('idAtividade').invalid && (form_etapa2_2_2.get('idAtividade').dirty || form_etapa2_2_2.get('idAtividade').touched)\">Campo obrigatório</div>\r\n                                    </div>\r\n                                    <div class=\"col-2\">\r\n                                        <button type=\"button\" class=\"btn btn-primary-confirm\" style=\"margin-top:2px; margin-left:40px\" (click)=\"fnProduto2Adicionar_Atividade()\">ADICIONAR</button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"validacao\" style=\"margin-left: 25px\" *ngIf=\"etapa_erro === 2\">Atividade já adicionada.</div>\r\n                                <div class=\"form-group row\">\r\n                                    <div class=\"col-12\">\r\n                                        <ul>\r\n                                            <li class=\"pg\" *ngFor=\"let l of item.produto2_atividadeSelecionados\" style=\"font-size: 16px; line-height: 50px\">\r\n                                                {{l.dsAtividade}}\r\n                                                <span style=\"cursor: pointer; color:#20a1fa; font-weight: bold; float:right; padding-right:80px\" (click)=\"fnProduto2Remover_Atividade(l.idAtividade)\"><img src=\"/assets/icone-excluir.png\" height=\"10px\" width=\"10px\"> Excluir</span>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"validacao\" *ngIf=\"item.produto2_atividadeTodos === '0' && form_etapa2_2.get('atividadeSelecionados').invalid && (form_etapa2_2.get('atividadeSelecionados').dirty || form_etapa2_2.get('atividadeSelecionados').touched)\">Selecione pelo menos uma atividade.</div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- / seleção atividade -->\r\n\r\n                    <!-- vigência -->\r\n                    <div class=\"panel collapsed-bg\">\r\n                        <a data-toggle=\"collapse\" href=\"#secao-nc-04\" aria-expanded=\"true\">\r\n                            Período de vigência\r\n                        </a>\r\n                        <div id=\"secao-nc-04\" class=\"collapse show\">\r\n                            <div class=\"timer\">\r\n                                <div class=\"clock\"><img src=\"/assets/sand-clock.png\" height=\"70px\" width=\"70px\"></div>\r\n                                <div class=\"timer_texto\" style=\"padding-top: 12px;margin-left: 100px;\"><b>Duração do Período de Acesso</b></div>\r\n                                <div class=\"timer_texto\" style=\"margin-left: 100px;\">12 Meses\r\n                                    <br />{{vigencia_produto2}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- / vigência -->\r\n                \r\n                </div>\r\n\r\n                <!-- valor total -->\r\n                <div class=\"valor\">Total do Produto - {{item.produto2_valor | currency:'BRL'}}</div>\r\n                <!-- / valor total -->\r\n\r\n            </div>\r\n            <!-- / NEGOCIAÇÃO COLETIVA -->\r\n\r\n            <!-- NEGOCIAÇÃO COLETIVA CUSTOMIZÁVEL -->\r\n            <div class=\"etapa\" *ngIf=\"etapa === 2 && etapa_produto == 3\" [formGroup]=\"form_etapa2_2\">\r\n                <div class=\"item_texto\">Negociação Coletiva Customizável</div>\r\n                <div class=\"accordion-item\">\r\n\r\n                    <div id=\"customizer\" style=\"overflow: auto; height: 600px;\">\r\n                        <p>\r\n                            O Salariômetro da Fipe desenhou uma assinatura para acompanhar\r\n                            negociações coletivas, ajustada para as necessidades de cada assinante. O\r\n                            novo produto consolida e detalha os resultados da negociação das seguintes\r\n                            situações:\r\n                        </p>\r\n                            <table class=\"table custom-table\">\r\n                                <thead>\r\n                                  <tr>\r\n                                    <th class=\"first-column\">Âmbito das negociações</th>\r\n                                    <th>Resultados disponibilizados</th>\r\n                                  </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                  <tr>\r\n                                    <td class=\"first-column\">Assinante</td>\r\n                                    <td>\r\n                                        Negociações conduzidas\r\n                                        pelo próprio assinante\r\n                                        (empresa ou sindicato patronal)\r\n                                    </td>\r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"first-column\">Mesmos sindicatos laborais</td>\r\n                                    <td>\r\n                                        Negociações dos sindicatos laborais que\r\n                                        representam os empregados do assinante, com\r\n                                        outras empresas ou outros sindicatos patronais\r\n                                    </td>\r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"first-column\">Referências empresariais</td>\r\n                                    <td>\r\n                                        Negociações conduzidas por empresas ou \r\n                                        sindicatos patronais de interesse do assinante\r\n                                    </td>\r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"first-column\">Referências laborais</td>\r\n                                    <td>\r\n                                        Negociações de outros sindicatos laborais de\r\n                                        interesse do assinante\r\n                                    </td>\r\n                                  </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        \r\n                        <p>\r\n                            Recursos disponibilizados: a tela de consulta, no formato Power BI:<br />\r\n                            <br />&emsp; • <strong>Informa</strong> a frequência absoluta e relativa de mais de 40 resultados da\r\n                                            negociação e também o valor médio e mediano de resultados\r\n                                        representados por grandezas numéricas.\r\n                            <br />&emsp; • <strong>Inclui</strong> os resultados dos instrumentos coletivos com início de vigência no\r\n                                            intervalo dos 12 meses anteriores, bem como os com início de vigência\r\n                                            anterior aos 12 meses e que continuem válidos no momento da consulta\r\n                                            (instrumentos com vigência maior que 12 meses).\r\n                            <br />&emsp; • <strong>Permite</strong> escolher o intervalo inteiro dos 12 últimos meses, de alguns\r\n                                            meses, ou de um mês.\r\n                            <br />&emsp; • <strong>Permite</strong> também separar resultados de acordos coletivos e de convenções\r\n                                            coletivas.\r\n                            <br />&emsp; • <strong>Permite</strong> ainda consultar o texto completo de cada instrumento coletivo,\r\n                                            identificar as partes que o assinam e acessar os respectivos resultados\r\n                                            negociados, individualizados.\r\n                            <br />&emsp; • <strong>Associa</strong> um link a cada instrumento, para acessar o respectivo conteúdo,\r\n                                            diretamente na página MEDIADOR\r\n                                            Atualização: O banco de dados diariamente, mas há uma demora entre a\r\n                                            assinatura do instrumento coletivo e a disponibilização no MEDIADOR.\r\n                            <br /><br />\r\n                            <strong>Atualização:</strong> O banco de dados diariamente, mas há uma demora entre a\r\n                            assinatura do instrumento coletivo e a disponibilização no MEDIADOR.\r\n                            <br /><br />\r\n                            <strong>Inputs do assinante:</strong> O interessado precisa apenas informar seus CNPJs e o\r\n                            CNPJ das empresas ou sindicatos de referência. O Salariômetro consolidará\r\n                            todos os instrumentos referenciados aos CNPJs e os consolidará para\r\n                            consultas.\r\n                            <br /><br />\r\n                            <strong>Validade da assinatura:</strong> A assinatura é anual e o acesso às telas de consulta\r\n                            é liberado mediante o pagamento da anuidade ou a formalização da compra.\r\n                            <strong>Preço e condições (na fase de lançamento da assinatura customizada)</strong>               \r\n                            O preço da assinatura customizada anual é formado por duas partes, uma fixa\r\n                            de R$4.000,00 e outra variável, que depende da quantidade de instrumentos\r\n                            selecionados pelo assinante. O preço unitário dos instrumentos diminui à\r\n                            medida que a quantidade aumenta. As tabelas abaixo apresentam a\r\n                            precificação da parte variável para quantidades de até 1.000 instrumentos\r\n                            (Tabela 1) e o preço total da assinatura (Tabela 2). O preço unitário dos\r\n                            instrumentos selecionados é R$35,00, para os primeiros 200, R$25,00 partir do\r\n                            201º até o 500º, e R$15,00 a partir do 501º.\r\n                            <br /><br />\r\n                        </p>\r\n                        <strong style=\"margin-left: 210px;\">Tabela 1: Preço de cada instrumento selecionado</strong>\r\n                        <table class=\"table custom-table2\">\r\n                            <thead>\r\n                              <tr>\r\n                                <th class=\"first-column2\">Quantidade de instrumentos</th>\r\n                                <th>Preço unitário</th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                              <tr>\r\n                                <td class=\"first-column2\">até 200</td>\r\n                                <td>\r\n                                    R$ 35,00\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td class=\"first-column2\">201 a 500</td>\r\n                                <td>\r\n                                    R$ 25,00\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td class=\"first-column2\">501 a 1.000</td>\r\n                                <td>\r\n                                    R$ 15,00\r\n                                </td>\r\n                              </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <p>\r\n                            A Tabela 2 apresenta o preço de assinaturas na fase de lançamento, para\r\n                            quantidades com intervalos de 50 instrumentos, incluindo a parte fixa e a parte\r\n                            variável.\r\n                        </p>\r\n                        <strong>Tabela 2: Preço da assinatura customizada em função da quantidade de instrumentos selecionados </strong>\r\n                        <table class=\"table custom-table2\">\r\n                            <thead>\r\n                              <tr>\r\n                                <th class=\"first-column3\" rowspan=\"2\">Quantidade de instrumentos</th>\r\n                                <th colspan=\"3\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Preço</th>\r\n                              </tr>\r\n                              <tr>\r\n                                <th class=\"first-column3\">Parte fixa</th>\r\n                                <th class=\"first-column3\">Parte variável</th>\r\n                                <th class=\"first-column3\">Total</th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr><td class=\"first-column3\">0</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 0</td><td class=\"first-column3\">R$ 4.000</td></tr>\r\n                                <tr><td class=\"first-column3\">50</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 1.750</td><td class=\"first-column3\">R$ 5.750</td></tr>\r\n                                <tr><td class=\"first-column3\">100</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 3.500</td><td class=\"first-column3\">R$ 7.500</td></tr>\r\n                                <tr><td class=\"first-column3\">150</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 5.250</td><td class=\"first-column3\">R$ 9.250</td></tr>\r\n                                <tr><td class=\"first-column3\">200</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 7.000</td><td class=\"first-column3\">R$ 11.000</td></tr>\r\n                                <tr><td class=\"first-column3\">250</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 8.250</td><td class=\"first-column3\">R$ 12.250</td></tr>\r\n                                <tr><td class=\"first-column3\">300</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 9.500</td><td class=\"first-column3\">R$ 13.500</td></tr>\r\n                                <tr><td class=\"first-column3\">350</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 10.750</td><td class=\"first-column3\">R$ 14.750</td></tr>\r\n                                <tr><td class=\"first-column3\">400</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 12.000</td><td class=\"first-column3\">R$ 16.000</td></tr>\r\n                                <tr><td class=\"first-column3\">50</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 13.250</td><td class=\"first-column3\">R$ 17.250</td></tr>\r\n                                <tr><td class=\"first-column3\">500</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 14.500</td><td class=\"first-column3\">R$ 18.500</td></tr>\r\n                                <tr><td class=\"first-column3\">550</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 15.250</td><td class=\"first-column3\">R$ 19.250</td></tr>\r\n                                <tr><td class=\"first-column3\">600</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 16.000</td><td class=\"first-column3\">R$ 20.000</td></tr>\r\n                                <tr><td class=\"first-column3\">650</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 16.750</td><td class=\"first-column3\">R$ 20.750</td></tr>\r\n                                <tr><td class=\"first-column3\">700</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 17.500</td><td class=\"first-column3\">R$ 21.500</td></tr>\r\n                                <tr><td class=\"first-column3\">750</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 18.250</td><td class=\"first-column3\">R$ 22.250</td></tr>\r\n                                <tr><td class=\"first-column3\">800</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 19.000</td><td class=\"first-column3\">R$ 23.000</td></tr>\r\n                                <tr><td class=\"first-column3\">850</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 19.750</td><td class=\"first-column3\">R$ 23.750</td></tr>\r\n                                <tr><td class=\"first-column3\">900</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 20.500</td><td class=\"first-column3\">R$ 24.500</td></tr>\r\n                                <tr><td class=\"first-column3\">950</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 21.250</td><td class=\"first-column3\">R$ 25.250</td></tr>\r\n                                <tr><td class=\"first-column3\">1000</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 22.000</td><td class=\"first-column3\">R$ 26.000</td></tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <p>\r\n                            <strong>Oçamento e demonstração</strong><br />\r\n                            Envie seus CNPJs e os CNPJs das empresas e sindicatos que deseja acompamhar como referências e retornaremos com o orçamento da sua assinatura. Teremos muito prazer também em oferecer uma demonstração dos recursos da assinatura customizável do Salariômetro, utilizando os CNPJs enviados.\r\n\r\n                        </p>\r\n                    </div>\r\n                    <br />\r\n                    <br />\r\n                    <p>\r\n                        <strong> Para conhecer os detalhes da Negociação Coletiva Customizável, clique em Avançar, preencha seu cadastro e nossa equipe entrará em contato o mais breve possível para agendar uma reunião de apresentação.</strong>\r\n                    </p>\r\n                    <!-- vigência -->\r\n                    <!-- <div class=\"panel collapsed-bg\">\r\n                        <a data-toggle=\"collapse\" href=\"#secao-nc-04\" aria-expanded=\"true\">\r\n                            Período de vigência\r\n                        </a>\r\n                        <div id=\"secao-nc-04\" class=\"collapse show\">\r\n                            <div class=\"timer\">\r\n                                <div class=\"clock\"><img src=\"/assets/sand-clock.png\" height=\"70px\" width=\"70px\"></div>\r\n                                <div class=\"timer_texto\" style=\"padding-top: 12px;margin-left: 100px;\"><b>Duração do Período de Acesso</b></div>\r\n                                <div class=\"timer_texto\" style=\"margin-left: 100px;\">12 Meses\r\n                                    <br />{{vigencia_produto2}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                    <!-- / vigência -->\r\n                \r\n                </div>\r\n            </div>\r\n            <!-- / NEGOCIAÇÃO COLETIVA CUSTOMIZÁVEL -->\r\n\r\n            <!-- PESQUISA SALARIAL -->\r\n            <div class=\"etapa\" *ngIf=\"etapa === 2 && etapa_produto == 1\" [formGroup]=\"form_etapa2_1\">\r\n                <div class=\"item_texto\">Pesquisa Salarial</div>\r\n\r\n                <div class=\"accordion-item\">\r\n\r\n                    <!-- seleção município -->\r\n                    <div class=\"panel collapsed-bg\">\r\n                        <a data-toggle=\"collapse\" href=\"#secao-ps-01\" aria-expanded=\"true\">\r\n                            Selecione o(s) município(s) que você deseja consultar\r\n                        </a>\r\n                        <div id=\"secao-ps-01\" class=\"collapse show\">\r\n                            <div class=\"form-check form-check-inline opcao_texto\">\r\n                                <input class=\"form-check-input\" type=\"radio\" id=\"produto1_cbx1\" value=\"1\" [(ngModel)]=\"item.produto1_municipioTodos\" formControlName=\"municipioTodos\">\r\n                                <label class=\"form-check-label\" for=\"produto1_cbx1\">Quero assinar todos os municípios</label>\r\n                            </div>\r\n                            <div class=\"form-check form-check-inline opcao_texto\">\r\n                                <input class=\"form-check-input\" type=\"radio\" id=\"produto1_cbx2\" value=\"0\" [(ngModel)]=\"item.produto1_municipioTodos\" formControlName=\"municipioTodos\">\r\n                                <label class=\"form-check-label\" for=\"produto1_cbx2\">Quero escolher o(s) município(s)</label>\r\n                            </div>\r\n            \r\n                            <div *ngIf=\"item.produto1_municipioTodos === '0'\">\r\n                                <div class=\"etapa_texto\">\r\n                                    <h6 style=\"margin-left: 25px;\">Selecione abaixo o(s) município(s) desejado(s).</h6>\r\n                                </div>\r\n                                <div class=\"form-group row\" style=\"margin-top: 20px; margin-left: 25px\" [formGroup]=\"form_etapa2_1_1\">\r\n                                    <div class=\"col-4\">\r\n                                        <kendo-combobox [(ngModel)]=\"item.produto1_cdUf\" [data]=\"lista_uf_filtro\" [filterable]=\"true\" [placeholder]=\"'Estado'\" [valuePrimitive]=\"true\"\r\n                                            (filterChange)=\"cmbProduto1UF_Filter($event)\" (valueChange)=\"cmbProduto1UF_Changed($event)\" textField=\"nmUf\" valueField=\"cdUf\"\r\n                                            formControlName=\"cdUf\" style=\"width: 100%\"></kendo-combobox>\r\n                                        <div class=\"validacao\" [innerHtml]=\"(form_etapa2_1_1.get('cdUf').invalid && (form_etapa2_1_1.get('cdUf').dirty || form_etapa2_1_1.get('cdUf').touched)) ? 'Campo obrigatório' : '&nbsp;'\"></div>\r\n                                    </div>\r\n                                    <div class=\"col-7\" style=\"padding-left: 20px;\">\r\n                                        <kendo-combobox [(ngModel)]=\"item.produto1_cdMunicipio\" [data]=\"lista_municipio_filtro\" [filterable]=\"true\" [placeholder]=\"'Município'\"\r\n                                            [valuePrimitive]=\"true\" (filterChange)=\"cmbProduto1Municipio_Filter($event)\" (valueChange)=\"cmbProduto1Municipio_Changed($event)\" textField=\"nmMunicipio\" valueField=\"cdMunicipio\"\r\n                                            formControlName=\"cdMunicipio\" style=\"width: 100%\"></kendo-combobox>\r\n                                        <div class=\"validacao\" [innerHtml]=\"(form_etapa2_1_1.get('cdMunicipio').invalid && (form_etapa2_1_1.get('cdMunicipio').dirty || form_etapa2_1_1.get('cdMunicipio').touched)) ? 'Campo obrigatório' : '&nbsp;'\"></div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <div class=\"col-6\">\r\n                                        <div class=\"validacao\" style=\"margin-left: 25px\" *ngIf=\"etapa_erro === 3\">Município já adicionado.</div>\r\n                                    </div>\r\n                                    <div class=\"col-5\" style=\"text-align: right\">\r\n                                        <button type=\"button\" class=\"btn btn-primary-confirm\" (click)=\"fnProduto1Adicionar_Municipio()\">ADICIONAR</button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"etapa_texto\" *ngIf=\"item.produto1_municipioSelecionados.length > 0\">\r\n                                    <h6 style=\"margin-left: 25px;\">Clique no(s) município(s) para obter mais informações. Caso queira remover algum item, clique em \"Excluir\".</h6>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <div class=\"col-11\">\r\n                                        <div class=\"accordion_wrap aw-municipio\" style=\"margin-left: 25px\">\r\n                                            <div class=\"accordion-item\">\r\n                                                <div class=\"panel collapsed-bg\" *ngFor=\"let l of item.produto1_municipioSelecionados; let i = index\">\r\n                                                    <a data-toggle=\"collapse\" [href]=\"'#secao-' + i\" aria-expanded=\"false\">\r\n                                                        {{l.nmMunicipioCompleto}} <span style=\"cursor: pointer; float: right; margin-right: 50px; color:#20a1fa; font-weight:bold;\" (click)=\"fnProduto1Remover_Municipio(l.cdMunicipio)\"><img src=\"/assets/icone-excluir.png\" height=\"10px\" width=\"10px\"> Excluir</span>\r\n                                                    </a>\r\n                                                    <div [id]=\"'secao-' + i\" class=\"collapse show\">\r\n                                                        <ul class=\"list-group list-group-flush\">\r\n                                                            <li class=\"list-group-item\">Os resultados da sua consulta foram calculados utilizando as informações de todos os municípios da microrregião a qual pertence o município escolhido. Veja a lista dos municípios da microrregião:</li>\r\n                                                            <li class=\"list-group-item\" *ngFor=\"let l1 of lista_municipio | municipio_filter:l.cdMicro\">{{l1.nmMunicipioCompleto}}</li>\r\n                                                        </ul>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"validacao\" *ngIf=\"item.produto1_municipioTodos === '0' && form_etapa2_1.get('municipioSelecionados').invalid && (form_etapa2_1.get('municipioSelecionados').dirty || form_etapa2_1.get('municipioSelecionados').touched)\">Selecione pelo menos um município</div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- / seleção município -->\r\n\r\n                    <!-- seleção período de acesso -->\r\n                    <div class=\"panel collapsed-bg\">\r\n                        <a data-toggle=\"collapse\" href=\"#secao-ps-02\" aria-expanded=\"true\">\r\n                            Selecione o período de vigência\r\n                        </a>\r\n                        <div id=\"secao-ps-02\" class=\"collapse show opcao_texto\">\r\n                            <kendo-combobox [(ngModel)]=\"item.produto1_idVigencia\" [data]=\"lista_vigencia_produto1\" [textField]=\"'text'\" [valueField]=\"'value'\" [valuePrimitive]=\"true\" [placeholder]=\"'Vigência'\"\r\n                                (valueChange)=\"cmbProduto1Vigencia_Change($event)\"\r\n                                formControlName=\"idVigencia\"></kendo-combobox>\r\n                            {{vigencia_produto1}}\r\n                            <div class=\"validacao\" *ngIf=\"form_etapa2_1.get('idVigencia').invalid && (form_etapa2_1.get('idVigencia').dirty || form_etapa2_1.get('idVigencia').touched)\">Campo obrigatório</div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- / seleção período de acesso -->\r\n\r\n                </div>                \r\n\r\n                <!-- valor total -->\r\n                <div class=\"valor\">Total do Produto - {{item.produto1_valor | currency:'BRL' }}</div>\r\n                <!-- / valor total -->\r\n           \r\n            </div>            \r\n            <!-- / PESQUISA SALARIAL -->\r\n\r\n            <!-- SOLICITAÇÕES ESPECIAIS E CONSULTORIA -->\r\n            <div class=\"etapa\" *ngIf=\"etapa === 2 && etapa_produto == 4\" [formGroup]=\"form_etapa2_2\">\r\n                <div class=\"item_texto\">Solicitações especiais e Consultoria</div>\r\n                <div class=\"accordion-item\">\r\n\r\n                    <div id=\"customizer\">\r\n                        <p>\r\n                            O Salariômetro pode formatar serviços para atender demandas não padronizadas de seus clientes.\r\n                            Diga o serviço que precisa e tentaremos desenhar uma solução para atendê-lo.\r\n                        </p>\r\n                        <p>\r\n                            <strong> Para que possamos atendê-lo, clique em Avançar, preencha seu cadastro e nossa equipe entrará em contato o mais breve possível para agendar uma reunião.</strong>\r\n                        </p>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n\r\n            <!-- /COLICITAÇÕES ESPECIAIS E CONSULTORIA -->\r\n\r\n            <!-- DADOS CADASTRAIS -->\r\n            <div class=\"etapa\" *ngIf=\"etapa === 3\" [formGroup]=\"form_etapa3\">\r\n                <div class=\"item_texto\">Dados Cadastrais</div>\r\n                <div class=\"etapa_texto\">Preencha seus dados cadastrais:(os dados serão usados para a emissão da nota fiscal)</div>\r\n                <div class=\"form-group row cadastro\" style=\"margin-top: 30px\">\r\n                    <label class=\"col-2 col-form-label\">E-mail</label>\r\n                    <div class=\"col-7\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"100\" [(ngModel)]=\"item.pessoal_dsEmail\" formControlName=\"pessoal_dsEmail\" (keypress)=\"fnEmailChanged()\">\r\n                    </div>\r\n                    <div class=\"col-3 erros\">\r\n                        <div class=\"validacao\" *ngIf=\"form_etapa3.get('pessoal_dsEmail').invalid && form_etapa3.get('pessoal_dsEmail').touched && (form_etapa3.get('pessoal_dsEmail').errors | first_error) === 'required'\">Campo obrigatório</div>\r\n                        <div class=\"validacao\" *ngIf=\"form_etapa3.get('pessoal_dsEmail').invalid && form_etapa3.get('pessoal_dsEmail').touched && (form_etapa3.get('pessoal_dsEmail').errors | first_error) === 'email'\">E-mail inválido</div>\r\n                        <div class=\"validacao\" *ngIf=\"form_etapa3.get('pessoal_dsEmail').invalid && form_etapa3.get('pessoal_dsEmail').touched && (form_etapa3.get('pessoal_dsEmail').errors | first_error) === 'duplicate'\">E-mail já utilizado</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row cadastro\">\r\n                    <label class=\"col-2 col-form-label\">Nome</label>\r\n                    <div class=\"col-7\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"200\" [(ngModel)]=\"item.pessoal_nmCliente\" formControlName=\"pessoal_nmCliente\" (keypress)=\"fnEmailChanged()\">\r\n                    </div>\r\n                    <div class=\"col-3 erros\">\r\n                        <div class=\"validacao\" *ngIf=\"form_etapa3.get('pessoal_nmCliente').invalid && (form_etapa3.get('pessoal_nmCliente').dirty || form_etapa3.get('pessoal_nmCliente').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row cadastro\">\r\n                    <label class=\"col-2 col-form-label\">Tipo de Documento</label>\r\n                    <div class=\"col-7\">\r\n                        <div class=\"form-check form-check-inline\" style=\"padding-top: calc(.375rem + 1px)\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"pessoal_cdDocumento\" id=\"cbxDocumento1\" [value]=\"'1'\" [(ngModel)]=\"item.pessoal_cdDocumento\" formControlName=\"pessoal_cdDocumento\" (change)=\"cbxDocumento_Changed()\">\r\n                            <label class=\"form-check-label\" for=\"cbxDocumento1\">CPF</label>\r\n                        </div>\r\n                        <div class=\"form-check form-check-inline\">\r\n                            <input class=\"form-check-input\" type=\"radio\" name=\"pessoal_cdDocumento\" id=\"cbxDocumento2\" [value]=\"'2'\" [(ngModel)]=\"item.pessoal_cdDocumento\" formControlName=\"pessoal_cdDocumento\" (change)=\"cbxDocumento_Changed()\">\r\n                            <label class=\"form-check-label\" for=\"cbxDocumento2\">CNPJ</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-3 erros\">\r\n                        <div class=\"validacao\" *ngIf=\"form_etapa3.get('pessoal_cdDocumento').invalid && (form_etapa3.get('pessoal_cdDocumento').dirty || form_etapa3.get('pessoal_cdDocumento').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row cadastro\">\r\n                    <label class=\"col-2 col-form-label\">Nº do Documento</label>\r\n                    <div class=\"col-7\">\r\n                        <kendo-maskedtextbox [mask]=\"maskDocumento\" style=\"width: 100%\" [(ngModel)]=\"item.pessoal_nuDocumento\" formControlName=\"pessoal_nuDocumento\"></kendo-maskedtextbox>\r\n                    </div>\r\n                    <div class=\"col-3 erros\">\r\n                        <div class=\"validacao\" *ngIf=\"form_etapa3.get('pessoal_nuDocumento').invalid && (form_etapa3.get('pessoal_nuDocumento').dirty || form_etapa3.get('pessoal_nuDocumento').touched)\">Documento inválido</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row cadastro\">\r\n                    <label class=\"col-2 col-form-label\">Cargo/Ocupação</label>\r\n                    <div class=\"col-7\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"50\" [(ngModel)]=\"item.pessoal_dsOcupacao\" formControlName=\"pessoal_dsOcupacao\">\r\n                    </div>\r\n                    <div class=\"col-3 erros\">\r\n                        <div class=\"validacao\" *ngIf=\"form_etapa3.get('pessoal_dsOcupacao').invalid && (form_etapa3.get('pessoal_dsOcupacao').dirty || form_etapa3.get('pessoal_dsOcupacao').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row cadastro\">\r\n                    <label class=\"col-2 col-form-label\">Organização</label>\r\n                    <div class=\"col-7\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"100\" [(ngModel)]=\"item.pessoal_dsOrganizacao\" formControlName=\"pessoal_dsOrganizacao\">\r\n                    </div>\r\n                    <div class=\"col-3 erros\">\r\n                        <div class=\"validacao\" *ngIf=\"form_etapa3.get('pessoal_dsOrganizacao').invalid && (form_etapa3.get('pessoal_dsOrganizacao').dirty || form_etapa3.get('pessoal_dsOrganizacao').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row cadastro\">   \r\n                    <label class=\"col-2 col-form-label\">CEP</label>\r\n                    <div class=\"col-7\">\r\n                        <kendo-maskedtextbox type=\"text\" prompt=\" \" mask=\"00000-000\" [(ngModel)]=\"item.pessoal_dsCEP\"  maxlength=\"10\" class=\"form-control\" id=\"pessoal_dsCEP\" formControlName=\"pessoal_dsCEP\" (keyup)=\"fnCep($event.target.value)\"></kendo-maskedtextbox>\r\n                    </div>\r\n                    <div class=\"col-3 erros\">\r\n                        <div class=\"validacao\" *ngIf=\"form_etapa3.get('pessoal_dsCEP').invalid && (form_etapa3.get('pessoal_dsCEP').dirty || form_etapa3.get('pessoal_dsCEP').touched)\">CEP obrigatório</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row cadastro\">\r\n                    <label class=\"col-2 col-form-label\">Endereço</label>\r\n                    <div class=\"col-7\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"100\" [(ngModel)]=\"item.pessoal_dsEndereco\" formControlName=\"pessoal_dsEndereco\">\r\n                    </div>\r\n                    <div class=\"col-3 erros\">\r\n                        <div class=\"validacao\" *ngIf=\"form_etapa3.get('pessoal_dsEndereco').invalid && (form_etapa3.get('pessoal_dsEndereco').dirty || form_etapa3.get('pessoal_dsEndereco').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row cadastro\">\r\n                    <label class=\"col-2 col-form-label\">Número</label>\r\n                    <div class=\"col-7\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"15\" [(ngModel)]=\"item.pessoal_dsNumero\" formControlName=\"pessoal_dsNumero\">\r\n                    </div>\r\n                    <div class=\"col-3 erros\">\r\n                        <div class=\"validacao\" *ngIf=\"form_etapa3.get('pessoal_dsNumero').invalid && (form_etapa3.get('pessoal_dsNumero').dirty || form_etapa3.get('pessoal_dsNumero').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row cadastro\">\r\n                    <label class=\"col-2 col-form-label\">Complemento</label>\r\n                    <div class=\"col-7\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"50\" [(ngModel)]=\"item.pessoal_dsComplemento\" formControlName=\"pessoal_dsComplemento\">\r\n                    </div>\r\n                    <div class=\"col-3 erros\">\r\n                        <div class=\"validacao\" *ngIf=\"form_etapa3.get('pessoal_dsComplemento').invalid && (form_etapa3.get('pessoal_dsComplemento').dirty || form_etapa3.get('pessoal_dsComplemento').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row cadastro\">\r\n                    <label class=\"col-2 col-form-label\">Bairro</label>\r\n                    <div class=\"col-7\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"100\" [(ngModel)]=\"item.pessoal_dsBairro\" formControlName=\"pessoal_dsBairro\">\r\n                    </div>\r\n                    <div class=\"col-3 erros\">\r\n                        <div class=\"validacao\" *ngIf=\"form_etapa3.get('pessoal_dsBairro').invalid && (form_etapa3.get('pessoal_dsBairro').dirty || form_etapa3.get('pessoal_dsBairro').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row cadastro\">\r\n                    <label class=\"col-2 col-form-label\">Município</label>\r\n                    <div class=\"col-7\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"100\" [(ngModel)]=\"item.pessoal_dsMunicipio\" formControlName=\"pessoal_dsMunicipio\">\r\n                    </div>\r\n                    <div class=\"col-3 erros\">\r\n                        <div class=\"validacao\" *ngIf=\"form_etapa3.get('pessoal_dsMunicipio').invalid && (form_etapa3.get('pessoal_dsMunicipio').dirty || form_etapa3.get('pessoal_dsMunicipio').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row cadastro\">\r\n                    <label class=\"col-2 col-form-label\">Estado</label>\r\n                    <div class=\"col-7\">\r\n                        <input type=\"text\" class=\"form-control\" maxlength=\"100\" [(ngModel)]=\"item.pessoal_dsEstado\" formControlName=\"pessoal_dsEstado\">\r\n                    </div>\r\n                    <div class=\"col-3 erros\">\r\n                        <div class=\"validacao\" *ngIf=\"form_etapa3.get('pessoal_dsEstado').invalid && (form_etapa3.get('pessoal_dsEstado').dirty || form_etapa3.get('pessoal_dsEstado').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                </div>                                                                                \r\n\r\n\r\n                <div class=\"form-group row cadastro\">\r\n                    <label class=\"col-2 col-form-label\">Telefone</label>\r\n                    <div class=\"col-7\">\r\n                        <kendo-maskedtextbox [mask]=\"mask\" style=\"width: 100%\" [(ngModel)]=\"item.pessoal_nuTelefone\" formControlName=\"pessoal_nuTelefone\"\r\n                            (blur)=\"tbxTelefone_Blur()\" (valueChange)=\"tbxTelefone_Changed()\"></kendo-maskedtextbox>\r\n                    </div>\r\n                    <div class=\"col-3 erros\">\r\n                        <div class=\"validacao\" *ngIf=\"form_etapa3.get('pessoal_nuTelefone').invalid && (form_etapa3.get('pessoal_nuTelefone').dirty || form_etapa3.get('pessoal_nuTelefone').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row cadastro\">\r\n                    <label class=\"col-2 col-form-label\">Senha</label>\r\n                    <div class=\"col-7\">\r\n                        <input type=\"password\" class=\"form-control\" maxlength=\"50\" [(ngModel)]=\"item.pessoal_cdSenha\" formControlName=\"pessoal_cdSenha\">\r\n                    </div>\r\n                    <div class=\"col-3 erros\">\r\n                        <div class=\"validacao\" *ngIf=\"form_etapa3.get('pessoal_cdSenha').invalid && (form_etapa3.get('pessoal_cdSenha').dirty || form_etapa3.get('pessoal_cdSenha').touched)\">Campo obrigatório</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group form-check row cadastro\">\r\n                    <div class=\"col-7\">\r\n                        <input type=\"checkbox\" class=\"form-check-input\" id=\"chkTermo\" [(ngModel)]=\"item.pessoal_icTermo\" formControlName=\"pessoal_icTermo\">\r\n                        <label class=\"form-check-label\" for=\"chkTermo\">Ao clicar em Avançar, você concorda com nossos <a href=\"/assets/Termos.pdf\" target=\"_blank\" class=\"termos\">Termos</a>.</label>\r\n                    </div>\r\n                    <div class=\"col-7 erros\">\r\n                        <div class=\"validacao\" *ngIf=\"form_etapa3.get('pessoal_icTermo').invalid && (form_etapa3.get('pessoal_icTermo').dirty || form_etapa3.get('pessoal_icTermo').touched)\">Você deve aceitar o termo para prosseguir</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- / DADOS CADASTRAIS -->\r\n\r\n            <!-- PAGAMENTO -->\r\n            <div class=\"etapa\" *ngIf=\"etapa === 4\">\r\n                <h5 class=\"info_pgto\" *ngIf=\"show_pagamento === false\">Aguarde enquanto validamos seus dados e processamos seu pedido <img src =\"/assets/loader.gif\" height=\"12px\" width=\"24px\"></h5>\r\n                <!-- <div *ngIf=\"show_pagamento === true\">\r\n                    <div class=\"item_texto\">Pagamento</div>\r\n                    <div class=\"etapa_texto\">Clique no botão abaixo para realizar o pagamento através do site da Cielo. O navegador abrirá uma janela em ambiente seguro para realizar a transação.</div>\r\n                    <div class=\"etapa_texto\"> \r\n                        <br />  \r\n                        Assim que o pagamento for liberado, você terá acesso aos conteúdos adquiridos.\r\n                        <br /><br />\r\n                    </div>\r\n                    <form ngNoForm #formCielo action=\"https://cieloecommerce.cielo.com.br/Transactional/Order/Index\" target=\"_blank\" method=\"post\">\r\n                        <input type=\"hidden\" name=\"merchant_id\" value=\"D8804D25-BCE3-4527-B91F-7FE99A0D3B7C\" />\r\n                        <input type=\"hidden\" name=\"order_number\" [value]=\"'5245-' + retorno_assinar.idPedido\" />\r\n                        <input type=\"hidden\" name=\"shipping_type\" value=\"5\" />\r\n                        \r\n                        <ng-template ngFor let-item [ngForOf]=\"carrinho\" let-i=\"index\">\r\n                            <input type=\"hidden\" [name]=\"'cart_' + (i + 1) + '_name'\" [value]=\"item.dsProduto\" />\r\n                            <input type=\"hidden\" [name]=\"'cart_' + (i + 1) + '_unitprice'\" [value]=\"ValorCielo(item.valor)\" />\r\n                            <input type=\"hidden\" [name]=\"'cart_' + (i + 1) + '_quantity'\" value=\"1\" />\r\n                            <input type=\"hidden\" [name]=\"'cart_' + (i + 1) + '_type'\" value=\"2\" />\r\n                        </ng-template>\r\n                        \r\n                        <input type=\"hidden\" name=\"Customer_Name\" [value]=\"item.pessoal_nmCliente.trim()\" />\r\n                        <input type=\"hidden\" name=\"Customer_Email\" [value]=\"item.pessoal_dsEmail.trim()\" />\r\n                        <input type=\"hidden\" name=\"Customer_Phone\" [value]=\"item.pessoal_nuTelefone.trim()\" />\r\n\r\n                        <button type=\"submit\" class=\"btn btn-primary-confirm\" style=\"text-align: center; width: 30%;\">INICIAR PAGAMENTO</button>\r\n                    </form>\r\n                </div> -->\r\n\r\n                <!-- CONFIRMACAO CONTATO-->\r\n            <div *ngIf=\"show_pagamento === true && etapa_produto > 2\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 campos\">\r\n                        <div class=\"div-confimacao\">\r\n                            <div class=\"p-3 mb-2\">\r\n                                <h3><strong>Sua solicitação de contato foi recebida com sucesso!</strong></h3><br />\r\n                                <h6>Em breve entraremos em contato para maiores informações sobre o produto.</h6>\r\n                            </div>                           \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- / CONFIRMAÇÂO CONTATO-->\r\n\r\n                <div *ngIf=\"show_pagamento === true && etapa_produto < 3\">\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 campos\">\r\n                            <div class=\"div-confimacao\">\r\n                                <div class=\"p-3 mb-2\">\r\n                                    <h3><strong>Seu pedido foi realizado com sucesso!</strong></h3><br />\r\n                                    <h6>Em breve você receberá um e-mail com os dados da assinatura.</h6>\r\n                                </div>                           \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- <div class=\"row\">\r\n                        <div class=\"col-12 campos\">\r\n                            <div class=\"item_texto\">Pagamento</div>\r\n                            <div class=\"etapa_texto\">Escolha uma das opções abaixo para realizar o pagamento:</div>\r\n                        </div>\r\n                    </div> -->\r\n                        \r\n                    <!-- <div class=\"row\">\r\n                        <div class=\"col-12 campos\">\r\n                            <br />\r\n                            <div class=\"etapa_texto\">Anexe o comprovante de pagamento no campo abaixo ou envie-o para o e-mail <b>salarios@fipe.org.br</b> e, assim que validarmos o pagamento, você terá acesso aos conteúdos adquiridos.</div>\r\n                        </div>\r\n                    </div> -->\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 campos\">\r\n                            <div class=\"div-pagamento\">\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-12 campos\" style=\"text-align: left; margin-left: 20px; margin-right: 20px;\">\r\n                                        <br />\r\n                                        <h4><strong> Informações do Pedido</strong></h4>\r\n                                        <hr align=\"left\" />\r\n                                        <br />\r\n                                        <strong>Número do pedido: </strong><span style=\"font-size: 18px;\">5245-{{idPedido}}</span><br />\r\n                                        <strong>Produto(s): </strong><br />\r\n                                            <span *ngFor=\"let l of carrinho\" style=\"margin-left: 80px;\">\r\n                                                {{l.dsProduto}}<span *ngIf=\"etapa > 2\"> - {{l.valor | currency:'BRL'}}</span><br />\r\n                                            </span>\r\n                                        <strong>Valor da compra: </strong><span style=\"font-size: 18px;\">{{valor_total| currency:'BRL'}}</span><br />\r\n                                        <strong>Status: </strong><span style=\"font-size: 18px; color: red;\">Aguardando Pagamento</span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-12 campos\">\r\n                                        <div class=\"etapa_texto2\" style=\"margin-left: 20px; margin-bottom: 20px; margin-right: 20px;\">\r\n                                            <br />\r\n                                            <br />\r\n                                            *Ao realizar o pagamento, favor informar o CPF ou CNPJ cadastrado no campo descrição do PIX ou Depósito.<br />\r\n                                            **Caso o pagamento não seja realizado em até 72h, o pedido será cancelado automaticamente<br />\r\n                                            ***Para organizações que   necessitam de condições diferenciadas para efetuar o pagamento, favor entrar em contato pelo e-mail: <strong>salarios@fipe.org.br</strong>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 campos\">\r\n                            <div class=\"div-pagamento\">\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-12 campos\" style=\"text-align: left; margin-left: 20px;\">\r\n                                        <br />\r\n                                        <h4><strong> Formas de Pagamento</strong></h4>\r\n                                        <hr align=\"left\" />\r\n                                        <br />\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-5 campos\">\r\n                                        <div class=\"etapa_texto\" style=\"margin: 0 20px 0 60px;\">\r\n                                            <br />\r\n                                            <br />\r\n                                            <h5 class=\"lateral_titulo_02\">Opção 1: </h5><br />\r\n                                            Pague via PIX:<br /><br />\r\n                                            <img src=\"/assets/pix-106.png\" width=\"72\" height=\"27\"><br /><br />\r\n                                            <b>CNPJ:</b> 43.942.358/0001-46\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-2 campos\">\r\n                                        <div style=\"margin: 20px 0px 30px 60px; height: 280px; border-left: 1px solid grey;\"></div>\r\n                                    </div>\r\n                                    <div class=\"col-5 campos\">\r\n                                        <div class=\"etapa_texto\" style=\"margin: 0 70px 0 20px;\">\r\n                                            <br />\r\n                                            <br />\r\n                                            <h5 class=\"lateral_titulo_02\">Opção 2: </h5><br />\r\n                                            Faça o depósito na conta abaixo:<br /><br />\r\n                                            <b>FIPE - Fundação Instituto de <br />Pesquisas Econômicas</b><br />\r\n                                            <b>CNPJ:</b> 43.942.358/0001-46<br />\r\n                                            <b>Banco:</b> 001 (Banco do Brasil)<br />\r\n                                            <b>Agência:</b> 1897-X<br />\r\n                                            <b>Conta Corrente:</b> 2703-0<br />\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    \r\n\r\n                    <!-- <div class=\"row\">\r\n                        <div class=\"col-12 campos\">\r\n                            <div class=\"div-file\">\r\n                                <input type=\"file\" style=\"visibility:hidden; width: 20px;\" id=\"control_comprovante\" ng-file-model=\"comprovante\" (change)=\"fnChangeFile()\" />\r\n                                <label for=\"control_comprovante\" id=\"comprovante_texto\" style=\"margin-right: 20px; margin-top: 12px;\">Clique&nbsp;<b style=\"color: #20a1fa;\">aqui</b>&nbsp;para adicionar um comprovante</label>\r\n                                <button type=\"submit\" class=\"btn btn-primary-confirm\" style=\"margin-top: 3px;\" (click)=\"fnAddFile()\">Enviar</button>                            \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 campos\">\r\n                            <div class=\"etapa_texto\" style=\"margin-left: 260px;\">\r\n                                <div class=\"validacao\" *ngIf=\"enviado === 'ok'\" style=\"color: green;\">Comprovante enviado com sucesso!</div>\r\n                                <div class=\"validacao\" *ngIf=\"enviado === 'nok'\">Erro ao enviar comprovante!</div>\r\n                                <div class=\"validacao\" *ngIf=\"enviado === 'null'\">Erro ao enviar comprovante!</div>\r\n                            </div>                                \r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <!-- / PAGAMENTO -->\r\n\r\n            <div class=\"acao\">\r\n                <button type=\"button\" class=\"btn btn-primary-cancel\"  (click)=\"fnEtapaVoltar()\"  *ngIf=\"etapa > 1 && etapa < 4\">VOLTAR</button>\r\n                <button type=\"button\" class=\"btn btn-primary-confirm\" (click)=\"fnEtapaAvancar()\" *ngIf=\"etapa <= 3 && etapa > 1 \">AVANÇAR</button>\r\n                <button type=\"button\" class=\"btn btn-primary-confirm\" (click)=\"fnVoltar()\"       *ngIf=\"etapa === 5\">HOME</button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"lateral sticky\">\r\n            <div class=\"lateral_caixa_cinza\">\r\n                <h4 class=\"lateral_titulo_02\">Precisa de ajuda?</h4>\r\n                Para dúvidas ou sugestões, envie um e-mail para:\r\n                <br />\r\n                <b>salarios@fipe.org.br</b>\r\n            </div>\r\n\r\n            <h4 class=\"lateral_titulo\" *ngIf=\"etapa < 4 && etapa_produto < 3\">CARRINHO</h4>\r\n            <div class=\"shopping_cart\" *ngIf=\"etapa < 4 && etapa_produto < 3\">\r\n                <img src=\"/assets/shopping-cart.png\" height=\"20px\" width=\"20px\">\r\n            </div>\r\n            <div class=\"carrinho\" *ngIf=\"etapa < 4 && etapa_produto < 3\">\r\n                <span *ngIf=\"carrinho.length === 0\">Não há itens no carrinho</span>\r\n                <div *ngIf=\"carrinho.length > 0\">\r\n                    <div class=\"carrinho-item\" *ngFor=\"let l of carrinho\">\r\n                        {{l.dsProduto}}<span *ngIf=\"etapa > 2\"> - {{l.valor | currency:'BRL'}}</span>\r\n                    </div>\r\n                    \r\n                </div>\r\n                <div class=\"div-total\" *ngIf=\"carrinho.length > 0 && etapa < 4\">\r\n                    <div style=\"margin-left: 10px; margin-top: 10px;\"><b>Total:</b><br /><br /></div>\r\n                    <div style=\"color: rgb(0, 143, 221); margin-left: 10px; margin-bottom: 10px;\"><h3><b>{{valor_total| currency:'BRL'}}</b></h3></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- / FLAT MENU -->\r\n\r\n<app-login-modal #login (eventUpdate)=\"fnEmailChanged($event)\"></app-login-modal>"

/***/ }),

/***/ "./src/app/components/sobre-salariometro/planos/planos.component.scss":
/***/ (function(module, exports) {

module.exports = ".topo {\n  background-image: url(\"/assets/topos/plano_assinatura.png\"); }\n\n.app-sobre-planos {\n  display: table;\n  margin-left: auto;\n  margin-right: auto;\n  width: 1149px; }\n\n.app-sobre-planos .formulario {\n    float: left;\n    padding-right: 40px;\n    width: calc(100% - 240px);\n    font-size: 14px;\n    margin-top: 30px; }\n\n.app-sobre-planos .formulario .erros {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n\n.app-sobre-planos .formulario .barra-progresso {\n      float: left;\n      margin-top: 20px;\n      height: 70px;\n      width: 100%; }\n\n.app-sobre-planos .formulario .barra-progresso .img {\n        float: left;\n        background-repeat: no-repeat;\n        background-size: cover;\n        height: 80px;\n        width: 80px; }\n\n.app-sobre-planos .formulario .barra-progresso .img-separator {\n        float: left;\n        border-bottom: 1px solid #FFF;\n        height: 30px;\n        width: 50px;\n        margin-left: -9px;\n        margin-right: -9px; }\n\n.app-sobre-planos .formulario .barra-progresso .img-separator1 {\n        border-bottom-color: #8D8D8D; }\n\n.app-sobre-planos .formulario .barra-progresso .img-separator2 {\n        border-bottom-color: #20a1fa; }\n\n.app-sobre-planos .formulario .barra-progresso .img11 {\n        background-image: url(\"/assets/planos/produto1.png\"); }\n\n.app-sobre-planos .formulario .barra-progresso .img12 {\n        background-image: url(\"/assets/planos/produto2.png\"); }\n\n.app-sobre-planos .formulario .barra-progresso .img21 {\n        background-image: url(\"/assets/planos/selecao1.png\"); }\n\n.app-sobre-planos .formulario .barra-progresso .img22 {\n        background-image: url(\"/assets/planos/selecao2.png\"); }\n\n.app-sobre-planos .formulario .barra-progresso .img31 {\n        background-image: url(\"/assets/planos/cadastro1.png\"); }\n\n.app-sobre-planos .formulario .barra-progresso .img32 {\n        background-image: url(\"/assets/planos/cadastro2.png\"); }\n\n.app-sobre-planos .formulario .barra-progresso .img41 {\n        background-image: url(\"/assets/planos/pagamento1.png\"); }\n\n.app-sobre-planos .formulario .barra-progresso .img42 {\n        background-image: url(\"/assets/planos/pagamento2.png\"); }\n\n.app-sobre-planos .formulario .etapa {\n      float: left;\n      margin-top: 30px;\n      width: 100%; }\n\n.app-sobre-planos .formulario .etapa .card {\n        float: left;\n        cursor: pointer;\n        height: 200px;\n        margin-top: 50px;\n        margin-right: 20px;\n        width: 200px; }\n\n.app-sobre-planos .formulario .etapa .card .card-body {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          font-size: 20px;\n          font-weight: bold;\n          text-align: center; }\n\n.app-sobre-planos .formulario .etapa .valor {\n        float: left;\n        font-size: 20px;\n        font-weight: bold;\n        margin-top: 30px;\n        text-align: right;\n        width: 100%; }\n\n.app-sobre-planos .formulario .acao {\n      float: left;\n      text-align: left;\n      width: 100%;\n      padding-bottom: 80px; }\n\n.app-sobre-planos .sticky {\n    position: sticky;\n    top: 90px;\n    padding-bottom: 30px; }\n\n.app-sobre-planos .lateral {\n    float: left;\n    margin-top: 30px;\n    width: 240px; }\n\n.app-sobre-planos .lateral .carrinho {\n      float: left;\n      width: 100%; }\n\n.app-sobre-planos .lateral .carrinho .carrinho-item {\n        float: left;\n        width: 100%; }\n\n.accordion_wrap {\n  margin-top: 0px; }\n\n.lateral_caixa_cinza {\n  margin-top: 0px !important; }\n\n.etapa_texto {\n  color: #3c3c3c;\n  font-size: 16px; }\n\n.etapa_texto2 {\n  color: #3c3c3c;\n  font-size: 12px;\n  text-align: left; }\n\n.timer_texto {\n  color: #3c3c3c;\n  font-size: 16px;\n  padding-left: 10px; }\n\n.item_texto {\n  color: #3c3c3c;\n  font-size: 22px;\n  margin-bottom: 30px;\n  position: relative; }\n\n.item_texto:after {\n    border-bottom: 3px solid #20a1fa;\n    content: \"\";\n    left: 0;\n    top: 35px;\n    position: absolute;\n    width: 20px; }\n\n.timer {\n  height: 100px;\n  margin-top: 20px; }\n\n.clock {\n  margin-left: 20px;\n  margin-top: 18px;\n  float: left; }\n\n.product04 {\n  float: left;\n  padding: 20px;\n  margin-top: 30px;\n  margin-bottom: 25px;\n  margin-right: 15px;\n  width: 200px;\n  height: 380px;\n  color: #7d7a7a;\n  border: solid 1px #7d7a7a; }\n\n.product04 .product_img04 {\n    margin-top: 18px;\n    width: 160px;\n    height: 160px;\n    background-image: url(\"/assets/icone-consulting.png\");\n    background-repeat: no-repeat;\n    background-size: contain; }\n\n.product03 {\n  float: left;\n  padding: 20px;\n  margin-top: 30px;\n  margin-bottom: 25px;\n  margin-right: 15px;\n  width: 200px;\n  height: 380px;\n  color: #7d7a7a;\n  border: solid 1px #7d7a7a; }\n\n.product03 .product_img03 {\n    width: 160px;\n    height: 160px;\n    background-image: url(\"/assets/icone-pesquisa-salarial.png\");\n    background-repeat: no-repeat;\n    background-size: contain; }\n\n.product02 {\n  float: left;\n  padding: 20px;\n  margin-top: 30px;\n  margin-bottom: 25px;\n  margin-right: 15px;\n  width: 200px;\n  height: 380px;\n  color: #7d7a7a;\n  border: solid 1px #7d7a7a; }\n\n.product02 .product_img02 {\n    width: 160px;\n    height: 160px;\n    background-image: url(\"/assets/icone-customizada.png\");\n    background-repeat: no-repeat;\n    background-size: contain; }\n\n.product01 {\n  float: left;\n  padding: 20px;\n  margin-top: 30px;\n  margin-bottom: 25px;\n  margin-right: 15px;\n  width: 200px;\n  height: 380px;\n  color: #7d7a7a;\n  border: solid 1px #7d7a7a; }\n\n.product01 .product_img01 {\n    width: 160px;\n    height: 160px;\n    background-image: url(\"/assets/icone-negociacao-coletiva.png\");\n    background-repeat: no-repeat;\n    background-size: contain; }\n\n.product_name {\n  text-align: center;\n  font-size: 16px;\n  font-weight: bold;\n  padding-top: 10px; }\n\n.shopping_cart {\n  padding-top: -5px;\n  float: left;\n  margin-top: -5px;\n  margin-left: 3px; }\n\n.opcao_texto {\n  font-size: 16px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-left: 25px; }\n\n.step_01 {\n  width: 100%; }\n\n.pg {\n  line-height: 50px;\n  font-size: 16px;\n  width: 85%;\n  padding-left: 25px; }\n\n.pg:nth-child(odd) {\n  background-color: #ebf0f4; }\n\n.cadastro {\n  margin-left: 27px; }\n\n.info_pgto {\n  text-align: center; }\n\nli {\n  list-style-type: none; }\n\nul {\n  -webkit-padding-start: 25px; }\n\n.termos {\n  color: #20a1fa; }\n\n.aw-municipio .panel > a {\n  border-left: none;\n  font-weight: normal; }\n\n.dvm-button {\n  color: #FFF;\n  background-color: #008fdd;\n  border: none;\n  height: 40px;\n  line-height: 30px;\n  padding: 0 20px;\n  text-transform: uppercase;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 30px; }\n\n.dvm-button:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05); }\n\n.div-total {\n  border: solid 1px #dadada;\n  margin-top: 100px;\n  height: 100px;\n  font-size: large; }\n\n.div-confimacao {\n  border: 1px solid #0a2e0a;\n  border-radius: 3px;\n  padding: 4px;\n  background: #b5cfa9;\n  margin-top: 20px;\n  width: 100%;\n  height: 140px;\n  text-align: center; }\n\n.div-pagamento {\n  border: 1px solid #000000;\n  border-radius: 3px;\n  padding: 4px;\n  margin-top: 20px;\n  width: 100%;\n  text-align: center; }\n\nhr {\n  border-style: inset;\n  border-width: 1px;\n  width: 94%;\n  -ms-flex-item-align: left;\n      -ms-grid-row-align: left;\n      align-self: left; }\n\n.MensagemNulo {\n  padding-top: 1em; }\n\n.first-column {\n  width: 30%; }\n\n.first-column2 {\n  width: 70%;\n  text-align: left; }\n\n.first-column3 {\n  width: 25%;\n  text-align: left; }\n\n.custom-table {\n  width: 80%;\n  margin-left: 80px;\n  text-align: left; }\n\n.custom-table2 {\n  width: 50%;\n  margin-left: 200px;\n  text-align: left; }\n"

/***/ }),

/***/ "./src/app/components/sobre-salariometro/planos/planos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sobre_PlanosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__db_service__ = __webpack_require__("./src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spinner_service__ = __webpack_require__("./src/app/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cadastro_class__ = __webpack_require__("./src/app/components/sobre-salariometro/planos/cadastro.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__carrinho_class__ = __webpack_require__("./src/app/components/sobre-salariometro/planos/carrinho.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_login_app_login_component__ = __webpack_require__("./src/app/components/app-login/app-login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Sobre_PlanosComponent = (function () {
    function Sobre_PlanosComponent(dbService, router, sessionService, spinnerService) {
        var _this = this;
        this.dbService = dbService;
        this.router = router;
        this.sessionService = sessionService;
        this.spinnerService = spinnerService;
        this.url_Cep = "https://viacep.com.br/ws/";
        this.enviado = '';
        this.carrinho = [];
        this.etapa = 1;
        this.etapa_erro = 0;
        this.etapa_produto = 0;
        this.etapa_progress = 20;
        this.copy_text = false;
        this.index_produto = 0;
        this.item = new __WEBPACK_IMPORTED_MODULE_6__cadastro_class__["a" /* Cadastro */]();
        this.idPedido = '';
        this.lista_atividade = [];
        this.lista_atividade_filtro = [];
        this.lista_municipio = [];
        this.lista_municipio_filtro = [];
        this.lista_produto = [];
        this.lista_vigencia_produto1 = [
            { text: "1 Mês", value: 1 },
            { text: "6 Meses", value: 2 },
            { text: "12 Meses", value: 3 }
        ];
        this.lista_vigencia_produto2 = [
            { text: "12 Meses", value: 3 }
        ];
        this.lista_uf = [];
        this.lista_uf_filtro = [];
        this.lista_uf_filtro1 = [];
        this.mask = "(00) 0000-00009";
        this.maskDocumento = "000.000.000-00";
        this.progress_step = 20;
        this.retorno_assinar = new __WEBPACK_IMPORTED_MODULE_7__carrinho_class__["b" /* RetornoAssinar */]();
        this.show_pagamento = false;
        this.vigencia_produto1 = '';
        this.vigencia_produto2 = '';
        this.valor_total = 0;
        this.emailExistente = false;
        this.form_etapa1 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            produtos: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
        this.form_etapa2_1 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            idVigencia: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            municipioTodos: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            municipioSelecionados: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', this.ValidaProduto1())
        });
        this.form_etapa2_1_1 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            cdUf: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            cdMunicipio: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
        this.form_etapa2_2 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            ufTodos: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            ufSelecionados: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', this.ValidaProduto2(1)),
            atividadeTodos: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            negociacaoPersonalizada: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            atividadeSelecionados: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', this.ValidaProduto2(2))
        });
        this.form_etapa2_2_1 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            cdUf: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
        this.form_etapa2_2_2 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            idAtividade: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
        this.form_etapa3 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            pessoal_nmCliente: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_cdDocumento: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_nuDocumento: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', this.ValidaCPFCNPJ()),
            pessoal_dsOcupacao: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_dsOrganizacao: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_dsCEP: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_dsEndereco: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_dsNumero: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_dsComplemento: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            pessoal_dsBairro: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            pessoal_dsMunicipio: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_dsEstado: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_nuTelefone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_dsEmail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', { validators: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].email], asyncValidators: this.ValidaEmail(), updateOn: 'blur' }),
            pessoal_cdSenha: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            pessoal_icTermo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', this.ValidaTermo())
        });
        // Carrega combos
        this.load();
        // Verifica se houve alteração que necessita cálculo
        this.item.alteracao_produto1_municipioTodos.subscribe(function () {
            _this.fnCalcular();
        });
        this.item.alteracao_produto1_municipio.subscribe(function () {
            _this.fnCalcular();
        });
        this.item.alteracao_produto1_idVigencia.subscribe(function () {
            _this.fnCalcular();
        });
        this.item.alteracao_produto2_ufTodos.subscribe(function () {
            _this.fnCalcular();
        });
        this.item.alteracao_produto2_uf.subscribe(function () {
            _this.fnCalcular();
        });
        this.item.alteracao_produto2_atividadeTodos.subscribe(function () {
            _this.fnCalcular();
        });
        this.item.alteracao_produto2_negociacaoPersonalizada.subscribe(function () {
            _this.fnCalcular();
        });
        this.item.alteracao_produto2_atividade.subscribe(function () {
            _this.fnCalcular();
        });
        // this.pagamentoService.status.subscribe((status: number) => {
        //     alert('aqui');
        //     // Próxima etapa
        //     this.etapa += 1;
        //     this.etapa_progress += this.progress_step;
        // });
        // Se está autenticado, pula tela de login
        if (this.sessionService.usuario.hash !== '') {
            this.etapa_progress = 25;
            this.progress_step = 25;
            this.item.pessoal_hash = this.sessionService.usuario.hash;
        }
        // Calcula vigência da negocição coletiva
        var data_atual = new Date();
        var data_fim = new Date(data_atual.setMonth(data_atual.getMonth() + 12));
        this.vigencia_produto2 =
            'Comprando hoje, você terá acesso até ' +
                (data_fim.getDate() < 10 ? '0' + data_fim.getDate() : data_fim.getDate()) + '/' +
                ((data_fim.getMonth() + 1) < 10 ? '0' + (data_fim.getMonth() + 1) : (data_fim.getMonth() + 1)) + '/' +
                data_fim.getFullYear();
    }
    Sobre_PlanosComponent.prototype.load = function () {
        var _this = this;
        this.dbService.get('Produto').subscribe(function (result) {
            // Encerra spinner
            _this.spinnerService.stop();
            // Guarda objetos
            _this.lista_produto = result;
        });
        this.dbService.get('UF/GetAssinatura').subscribe(function (result) {
            // Encerra spinner
            _this.spinnerService.stop();
            // Guarda objetos
            _this.lista_uf =
                _this.lista_uf_filtro =
                    _this.lista_uf_filtro1 = result;
        });
        this.dbService.get('Atividade/GetAssinatura').subscribe(function (result) {
            // Encerra spinner
            _this.spinnerService.stop();
            // Guarda objetos
            _this.lista_atividade =
                _this.lista_atividade_filtro = result;
        });
    };
    Sobre_PlanosComponent.prototype.cmbProduto1Municipio_Changed = function (value) {
        this.etapa_erro = 0;
    };
    Sobre_PlanosComponent.prototype.cmbProduto1Municipio_Filter = function (value) {
        this.lista_municipio_filtro = this.lista_municipio.filter(function (s) { return s.nmMunicipio.toLowerCase().indexOf(value.toLowerCase()) !== -1; });
    };
    Sobre_PlanosComponent.prototype.cmbProduto1UF_Changed = function (CdUf) {
        var _this = this;
        this.etapa_erro = 0;
        this.dbService.get('Municipio/GetAssinatura/?CdUf=' + CdUf).subscribe(function (result) {
            // Encerra spinner
            _this.spinnerService.stop();
            // Guarda objetos
            _this.lista_municipio =
                _this.lista_municipio_filtro = result;
        });
    };
    Sobre_PlanosComponent.prototype.cmbProduto1UF_Filter = function (value) {
        this.lista_uf_filtro = this.lista_uf.filter(function (s) { return s.nmUf.toLowerCase().indexOf(value.toLowerCase()) !== -1; });
    };
    Sobre_PlanosComponent.prototype.cmbProduto1Vigencia_Change = function (value) {
        var data_atual = new Date();
        var data_fim = null;
        switch (value) {
            case 1:
                data_fim = new Date(data_atual.setMonth(data_atual.getMonth() + 1));
                break;
            case 2:
                data_fim = new Date(data_atual.setMonth(data_atual.getMonth() + 6));
                break;
            case 3:
                data_fim = new Date(data_atual.setMonth(data_atual.getMonth() + 12));
                break;
        }
        if (data_fim !== null) {
            this.vigencia_produto1 =
                'Comprando hoje, você terá acesso até ' +
                    (data_fim.getDate() < 10 ? '0' + data_fim.getDate() : data_fim.getDate()) + '/' +
                    ((data_fim.getMonth() + 1) < 10 ? '0' + (data_fim.getMonth() + 1) : (data_fim.getMonth() + 1)) + '/' +
                    data_fim.getFullYear();
        }
        else {
            this.vigencia_produto1 = '';
        }
    };
    Sobre_PlanosComponent.prototype.cmbProduto2Atividade_Changed = function (value) {
        this.etapa_erro = 0;
    };
    Sobre_PlanosComponent.prototype.cmbProduto2Atividade_Filter = function (value) {
        this.lista_atividade_filtro = this.lista_atividade.filter(function (s) { return s.dsAtividade.toLowerCase().indexOf(value.toLowerCase()) !== -1; });
    };
    Sobre_PlanosComponent.prototype.cmbProduto2UF_Changed = function (value) {
        this.etapa_erro = 0;
    };
    Sobre_PlanosComponent.prototype.cmbProduto2UF_Filter = function (value) {
        this.lista_uf_filtro1 = this.lista_uf.filter(function (s) { return s.nmUf.toLowerCase().indexOf(value.toLowerCase()) !== -1; });
    };
    Sobre_PlanosComponent.prototype.fnCalcular = function () {
        var _this = this;
        var temp = {
            produto_selecionado: this.item.produto_selecionado,
            produto1_municipioTodos: this.item.produto1_municipioTodos,
            produto1_municipioSelecionados: this.item._produto1_municipioSelecionados,
            produto1_idVigencia: this.item._produto1_idVigencia,
            produto2_ufTodos: this.item.produto2_ufTodos,
            produto2_ufSelecionados: this.item._produto2_ufSelecionados,
            produto2_atividadeTodos: this.item.produto2_atividadeTodos,
            produto2_negociacaoPersonalizada: this.item.produto2_negociacaoPersonalizada,
            produto2_atividadeSelecionados: this.item._produto2_atividadeSelecionados,
            produto2_idVigencia: this.item.produto2_idVigencia
        };
        this.dbService.post('Assinatura/Calcular', temp).subscribe(function (result) {
            // Encerra spinner
            _this.spinnerService.stop();
            // Guarda objetos
            if (result.confirmacao === true) {
                _this.item.produto1_valor = result.valor_produto1;
                _this.item.produto2_valor = result.valor_produto2;
            }
        });
    };
    Sobre_PlanosComponent.prototype.fnCopyText = function () {
        var content = document.getElementById('chave_pix').value;
        //navigator.clipboard.writeText(content);
        this.copy_text = true;
        return;
    };
    Sobre_PlanosComponent.prototype.fnEtapaAvancar = function () {
        // Trata etapas
        var _this = this;
        if (this.emailExistente && this.sessionService.usuario.hash === '') {
            this.login.fnShow('planos', this.etapa);
            return;
        }
        switch (this.etapa) {
            case 1:
                if (this.item.produto_selecionado.length === 0) {
                    for (var ctrl in this.form_etapa1.controls) {
                        this.form_etapa1.controls[ctrl].markAsTouched();
                    }
                    return;
                }
                else {
                    for (var ctrl in this.form_etapa1.controls) {
                        this.form_etapa1.controls[ctrl].markAsPristine();
                        this.form_etapa1.controls[ctrl].markAsUntouched();
                    }
                }
                break;
            case 2:
                this.form_etapa2_1.controls['municipioSelecionados'].updateValueAndValidity();
                if (this.etapa_produto === 1) {
                    if (!this.form_etapa2_1.valid) {
                        for (var ctrl in this.form_etapa2_1.controls) {
                            this.form_etapa2_1.controls[ctrl].markAsTouched();
                        }
                        return;
                    }
                    else {
                        var posicao = this.carrinho.findIndex(function (s) { return s.idProduto === _this.etapa_produto; });
                        if (posicao >= 0) {
                            this.carrinho.splice(posicao, 1);
                        }
                        var _carrinho = new __WEBPACK_IMPORTED_MODULE_7__carrinho_class__["a" /* Carrinho */]();
                        _carrinho.idProduto = this.etapa_produto;
                        _carrinho.dsProduto = this.lista_produto.filter(function (s) { return s.idProduto === _this.etapa_produto; })[0].dsProduto;
                        _carrinho.valor = this.item.produto1_valor;
                        this.carrinho.push(_carrinho);
                    }
                }
                this.form_etapa2_2.controls['ufSelecionados'].updateValueAndValidity();
                this.form_etapa2_2.controls['atividadeSelecionados'].updateValueAndValidity();
                if (this.etapa_produto === 2) {
                    if (!this.form_etapa2_2.valid) {
                        for (var ctrl in this.form_etapa2_2.controls) {
                            this.form_etapa2_2.controls[ctrl].markAsTouched();
                        }
                        return;
                    }
                    else {
                        var posicao = this.carrinho.findIndex(function (s) { return s.idProduto === _this.etapa_produto; });
                        if (posicao >= 0) {
                            this.carrinho.splice(posicao, 1);
                        }
                        var _carrinho = new __WEBPACK_IMPORTED_MODULE_7__carrinho_class__["a" /* Carrinho */]();
                        _carrinho.idProduto = this.etapa_produto;
                        _carrinho.dsProduto = this.lista_produto.filter(function (s) { return s.idProduto === _this.etapa_produto; })[0].dsProduto;
                        _carrinho.valor = this.item.produto2_valor;
                        this.carrinho.push(_carrinho);
                    }
                }
                this.valor_total = this.item.produto1_valor + this.item.produto2_valor;
                break;
            case 3:
                if (!this.form_etapa3.valid) {
                    for (var ctrl in this.form_etapa3.controls) {
                        this.form_etapa3.controls[ctrl].markAsTouched();
                    }
                    return;
                }
                break;
        }
        // Verifica se deve mover ainda dentro da etapa 2
        if (this.etapa === 2 && this.index_produto < this.item.produto_selecionado.length) {
            this.etapa_produto = this.item.produto_selecionado[this.index_produto];
            this.index_produto += 1;
            return;
        }
        // Próxima etapa
        this.etapa += 1;
        this.etapa_progress += this.progress_step;
        // Trata etapas
        if (this.etapa === 2) {
            this.etapa_produto = this.item.produto_selecionado[0];
            this.index_produto = 1;
            this.fnCalcular();
        }
        if (this.etapa === 3) {
            // Se está autenticado, pula tela de login
            if (this.sessionService.usuario.hash !== '') {
                this.etapa += 1;
            }
        }
        var customizavel = this.item.produto_selecionado[0];
        if (this.etapa === 4) {
            // Cadastra cliente
            var temp = {
                pessoal_hash: this.item.pessoal_hash,
                pessoal_nmCliente: this.item.pessoal_nmCliente,
                pessoal_cdDocumento: this.item.pessoal_cdDocumento,
                pessoal_nuDocumento: this.item.pessoal_nuDocumento,
                pessoal_dsOcupacao: this.item.pessoal_dsOcupacao,
                pessoal_dsOrganizacao: this.item.pessoal_dsOrganizacao,
                pessoal_dsCEP: this.item.pessoal_dsCEP,
                pessoal_dsEndereco: this.item.pessoal_dsEndereco,
                pessoal_dsNumero: this.item.pessoal_dsNumero,
                pessoal_dsComplemento: this.item.pessoal_dsComplemento,
                pessoal_dsBairro: this.item.pessoal_dsBairro,
                pessoal_dsMunicipio: this.item.pessoal_dsMunicipio,
                pessoal_dsEstado: this.item.pessoal_dsEstado,
                pessoal_nuTelefone: this.item.pessoal_nuTelefone,
                pessoal_dsEmail: this.item.pessoal_dsEmail,
                pessoal_cdSenha: this.item.pessoal_cdSenha,
                produto_selecionado: this.item.produto_selecionado,
                produto1_municipioTodos: this.item.produto1_municipioTodos,
                produto1_municipioSelecionados: this.item._produto1_municipioSelecionados,
                produto1_idVigencia: this.item._produto1_idVigencia,
                produto2_ufTodos: this.item.produto_selecionado[0] === 3 ? '1' : this.item.produto2_ufTodos,
                produto2_ufSelecionados: this.item._produto2_ufSelecionados,
                produto2_atividadeTodos: this.item.produto_selecionado[0] === 3 ? '1' : this.item.produto2_atividadeTodos,
                produto2_atividadeSelecionados: this.item._produto2_atividadeSelecionados,
                produto2_negociacaoPersonalizada: this.item.produto2_negociacaoPersonalizada,
                produto2_idVigencia: this.item.produto2_idVigencia
            };
            this.dbService.post('Assinatura/Assinar', temp).subscribe(function (result) {
                // Encerra spinner
                _this.spinnerService.stop();
                _this.retorno_assinar = result;
                if (_this.retorno_assinar.confirmacao === true) {
                    // Libera Cielo            
                    var posicao = _this.carrinho.findIndex(function (s) { return s.idProduto === _this.etapa_produto; });
                    if (posicao >= 0) {
                        _this.carrinho.splice(posicao, 1);
                    }
                    var _carrinho = new __WEBPACK_IMPORTED_MODULE_7__carrinho_class__["a" /* Carrinho */]();
                    _carrinho.idProduto = _this.etapa_produto;
                    _carrinho.dsProduto = _this.lista_produto.filter(function (s) { return s.idProduto === _this.etapa_produto; })[0].dsProduto;
                    if (_this.item.produto2_valor <= 0) {
                        _carrinho.valor = _this.item.produto1_valor;
                    }
                    else {
                        _carrinho.valor = _this.item.produto2_valor;
                    }
                    _this.carrinho.push(_carrinho);
                    _this.idPedido = _this.retorno_assinar.idPedido;
                    _this.show_pagamento = true;
                }
            });
        }
    };
    Sobre_PlanosComponent.prototype.fnEtapaVoltar = function () {
        this.etapa -= 1;
        this.etapa_progress -= this.progress_step;
        if (this.etapa === 1) {
            this.carrinho = [];
            this.item.produto_selecionado = [];
            this.etapa_produto = 0;
            this.index_produto = 0;
        }
        // Trata etapas
        if (this.etapa === 2) {
            this.etapa_produto = this.item.produto_selecionado[0];
            this.index_produto = 1;
        }
    };
    Sobre_PlanosComponent.prototype.fnProduto1Adicionar_Municipio = function () {
        var _this = this;
        // Valida formulário
        if (!this.form_etapa2_1_1.valid) {
            // Exibe erros
            for (var ctrl in this.form_etapa2_1_1.controls) {
                this.form_etapa2_1_1.controls[ctrl].markAsTouched();
            }
        }
        else {
            // Verifica se já existe
            var posicao = this.item.produto1_municipioSelecionados.findIndex(function (s) { return s.cdMunicipio === _this.item.produto1_cdMunicipio; });
            if (posicao >= 0) {
                this.etapa_erro = 3;
                return;
            }
            else {
                this.etapa_erro = 0;
            }
            // Insere item
            var municipio = this.lista_municipio.filter(function (s) { return s.cdMunicipio === _this.item.produto1_cdMunicipio; })[0];
            this.item.produto1_municipioSelecionados.push(municipio);
            this.item.produto1_municipioSelecionados = this.item.produto1_municipioSelecionados.sort(function (obj1, obj2) {
                if (obj1.nmMunicipioCompleto > obj2.nmMunicipioCompleto) {
                    return 1;
                }
                if (obj1.nmMunicipioCompleto < obj2.nmMunicipioCompleto) {
                    return -1;
                }
                return 0;
            });
        }
    };
    Sobre_PlanosComponent.prototype.fnProduto2Adicionar_Atividade = function () {
        var _this = this;
        // Valida formulário
        if (!this.form_etapa2_2_2.valid) {
            // Exibe erros
            for (var ctrl in this.form_etapa2_2_2.controls) {
                this.form_etapa2_2_2.controls[ctrl].markAsTouched();
            }
        }
        else {
            // Verifica se já existe
            var posicao = this.item.produto2_atividadeSelecionados.findIndex(function (s) { return s.idAtividade === _this.item.produto2_idAtividade; });
            if (posicao >= 0) {
                this.etapa_erro = 2;
                return;
            }
            else {
                this.etapa_erro = 0;
            }
            // Insere item
            var atividade = this.lista_atividade.filter(function (s) { return s.idAtividade === _this.item.produto2_idAtividade; })[0];
            this.item.produto2_atividadeSelecionados.push(atividade);
            this.item.produto2_atividadeSelecionados = this.item.produto2_atividadeSelecionados.sort(function (obj1, obj2) {
                if (obj1.dsAtividade > obj2.dsAtividade) {
                    return 1;
                }
                if (obj1.dsAtividade < obj2.dsAtividade) {
                    return -1;
                }
                return 0;
            });
        }
    };
    Sobre_PlanosComponent.prototype.fnProduto2Adicionar_UF = function () {
        var _this = this;
        // Valida formulário
        if (!this.form_etapa2_2_1.valid) {
            // Exibe erros
            for (var ctrl in this.form_etapa2_2_1.controls) {
                this.form_etapa2_2_1.controls[ctrl].markAsTouched();
            }
        }
        else {
            // Verifica se já existe
            var posicao = this.item.produto2_ufSelecionados.findIndex(function (s) { return s.cdUf === _this.item.produto2_cdUf; });
            if (posicao >= 0) {
                this.etapa_erro = 1;
                return;
            }
            else {
                this.etapa_erro = 0;
            }
            // Insere item
            var uf = this.lista_uf.filter(function (s) { return s.cdUf === _this.item.produto2_cdUf; })[0];
            this.item.produto2_ufSelecionados.push(uf);
            this.item.produto2_ufSelecionados = this.item.produto2_ufSelecionados.sort(function (obj1, obj2) {
                if (obj1.nmUf > obj2.nmUf) {
                    return 1;
                }
                if (obj1.nmUf < obj2.nmUf) {
                    return -1;
                }
                return 0;
            });
        }
    };
    Sobre_PlanosComponent.prototype.fnProduto1Remover_Municipio = function (cdMunicipio) {
        this.etapa_erro = 0;
        this.item.produto1_municipioSelecionados = this.item.produto1_municipioSelecionados.filter(function (s) { return s.cdMunicipio !== cdMunicipio; });
    };
    Sobre_PlanosComponent.prototype.fnProduto2Remover_Atividade = function (idAtividade) {
        this.etapa_erro = 0;
        this.item.produto2_atividadeSelecionados = this.item.produto2_atividadeSelecionados.filter(function (s) { return s.idAtividade !== idAtividade; });
    };
    Sobre_PlanosComponent.prototype.fnProduto2Remover_UF = function (cdUf) {
        this.etapa_erro = 0;
        this.item.produto2_ufSelecionados = this.item.produto2_ufSelecionados.filter(function (s) { return s.cdUf !== cdUf; });
    };
    Sobre_PlanosComponent.prototype.fnSelecionarProduto = function (idProduto) {
        this.carrinho = [];
        this.item.produto_selecionado = [];
        this.etapa_produto = idProduto;
        this.valor_total = 0;
        this.item.produto_selecionado.push(idProduto);
        var _carrinho = new __WEBPACK_IMPORTED_MODULE_7__carrinho_class__["a" /* Carrinho */]();
        _carrinho.idProduto = idProduto;
        _carrinho.dsProduto = this.lista_produto.filter(function (s) { return s.idProduto === idProduto; })[0].dsProduto;
        _carrinho.valor = 0;
        this.carrinho.push(_carrinho);
        this.etapa += 1;
        this.fnEtapaAvancar();
    };
    Sobre_PlanosComponent.prototype.fnVoltar = function () {
        // Manda para home
        this.router.navigate(['/home']);
    };
    Sobre_PlanosComponent.prototype.ValidaEmail = function () {
        var _this = this;
        return function (control) {
            return new Promise(function (resolve) {
                _this.dbService.post('Cliente/VerificarEmail', _this.item.pessoal_dsEmail).subscribe(function (result) {
                    // Encerra spinner
                    _this.spinnerService.stop();
                    if (result.emailDisponivel === true) {
                        resolve(null);
                    }
                    else {
                        _this.emailExistente = true;
                        _this.login.fnShow('planos', _this.etapa);
                        //resolve({"duplicate": true});
                    }
                });
            });
        };
    };
    Sobre_PlanosComponent.prototype.fnEmailChanged = function (etapa) {
        if (etapa === void 0) { etapa = 0; }
        var sessao = JSON.parse(sessionStorage.getItem('sessao_usuario'));
        if (sessao !== null) {
            this.etapa = 2;
            this.fnEtapaAvancar();
        }
    };
    Sobre_PlanosComponent.prototype.ValidaCPFCNPJ = function () {
        var _this = this;
        return function (control) {
            var strCPFCNPJ = _this.item.pessoal_nuDocumento.toString();
            var strCPFCNPJ = strCPFCNPJ.replace(/[^\d]+/g, '');
            if (strCPFCNPJ.length == 11) {
                var soma;
                var resto;
                soma = 0;
                if (strCPFCNPJ == "00000000000" ||
                    strCPFCNPJ == "11111111111" ||
                    strCPFCNPJ == "22222222222" ||
                    strCPFCNPJ == "33333333333" ||
                    strCPFCNPJ == "44444444444" ||
                    strCPFCNPJ == "55555555555" ||
                    strCPFCNPJ == "66666666666" ||
                    strCPFCNPJ == "77777777777" ||
                    strCPFCNPJ == "88888888888" ||
                    strCPFCNPJ == "99999999999")
                    return { invalido: true };
                for (var i = 1; i <= 9; i++)
                    soma = soma + parseInt(strCPFCNPJ.substring(i - 1, i)) * (11 - i);
                resto = (soma * 10) % 11;
                if ((resto == 10) || (resto == 11))
                    resto = 0;
                if (resto != parseInt(strCPFCNPJ.substring(9, 10)))
                    return { invalido: true };
                soma = 0;
                for (i = 1; i <= 10; i++)
                    soma = soma + parseInt(strCPFCNPJ.substring(i - 1, i)) * (12 - i);
                resto = (soma * 10) % 11;
                if ((resto == 10) || (resto == 11))
                    resto = 0;
                if (resto != parseInt(strCPFCNPJ.substring(10, 11)))
                    return { invalido: true };
                return null;
            }
            else {
                if (strCPFCNPJ == "00000000000000" ||
                    strCPFCNPJ == "11111111111111" ||
                    strCPFCNPJ == "22222222222222" ||
                    strCPFCNPJ == "33333333333333" ||
                    strCPFCNPJ == "44444444444444" ||
                    strCPFCNPJ == "55555555555555" ||
                    strCPFCNPJ == "66666666666666" ||
                    strCPFCNPJ == "77777777777777" ||
                    strCPFCNPJ == "88888888888888" ||
                    strCPFCNPJ == "99999999999999")
                    return { invalido: true };
                if (!strCPFCNPJ)
                    return { invalido: true };
                // Aceita receber o valor como string, número ou array com todos os dígitos
                var isString = typeof strCPFCNPJ === 'string';
                var validTypes = isString; // || Number.isInteger(strCPFCNPJ) || Array.isArray(strCPFCNPJ);
                // Elimina valor em formato inválido
                if (!validTypes)
                    return { invalido: true };
                // Filtro inicial para entradas do tipo string
                if (isString) {
                    // Limita ao máximo de 18 caracteres, para CNPJ formatado
                    if (strCPFCNPJ.length > 14)
                        return { invalido: true };
                    // Teste Regex para veificar se é uma string apenas dígitos válida
                    var digitsOnly = /^\d{14}$/.test(strCPFCNPJ);
                    // Teste Regex para verificar se é uma string formatada válida
                    var validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(strCPFCNPJ);
                    // Se o formato é válido, usa um truque para seguir o fluxo da validação
                    if (digitsOnly || validFormat)
                        true;
                    else
                        return { invalido: true };
                }
                // Guarda um array com todos os dígitos do valor
                var match = strCPFCNPJ.toString().match(/\d/g);
                var numbers_1 = Array.isArray(match) ? match.map(Number) : [];
                // Valida a quantidade de dígitos
                if (numbers_1.length !== 14)
                    return { invalido: true };
                // Elimina inválidos com todos os dígitos iguais
                var items = Array.from(numbers_1);
                if (items.length === 1)
                    return { invalido: true };
                // Cálculo validador
                var calc = function (x) {
                    var slice = numbers_1.slice(0, x);
                    var factor = x - 7;
                    var sum = 0;
                    for (var i_1 = x; i_1 >= 1; i_1--) {
                        var n = slice[x - i_1];
                        sum += n * factor--;
                        if (factor < 2)
                            factor = 9;
                    }
                    var result = 11 - (sum % 11);
                    return result > 9 ? 0 : result;
                };
                // Separa os 2 últimos dígitos de verificadores
                var digits = numbers_1.slice(12);
                // Valida 1o. dígito verificador
                var digit0 = calc(12);
                if (digit0 !== digits[0])
                    return { invalido: true };
                // Valida 2o. dígito verificador
                var digit1 = calc(13);
                if (digit1 !== digits[1])
                    return { invalido: true };
                return null;
            }
        };
    };
    Sobre_PlanosComponent.prototype.ValidaProduto1 = function () {
        var _this = this;
        return function (control) {
            if (_this.item.produto1_municipioTodos === '1') {
                return null;
            }
            else if (_this.item.produto1_municipioTodos === '0' && (_this.item.produto1_municipioSelecionados === null || _this.item.produto1_municipioSelecionados.length === 0)) {
                return { invalido: true };
            }
            return null;
        };
    };
    Sobre_PlanosComponent.prototype.ValidaProduto2 = function (campo) {
        var _this = this;
        return function (control) {
            switch (campo) {
                case 1:
                    if (_this.item.produto2_ufTodos === '1') {
                        return null;
                    }
                    else if (_this.item.produto2_ufTodos === '0' && (_this.item.produto2_ufSelecionados === null || _this.item.produto2_ufSelecionados.length === 0)) {
                        return { invalido: true };
                    }
                    return null;
                case 2:
                    if (_this.item.produto2_atividadeTodos === '1') {
                        return null;
                    }
                    else if (_this.item.produto2_atividadeTodos === '0' && (_this.item.produto2_atividadeSelecionados === null || _this.item.produto2_atividadeSelecionados.length === 0)) {
                        return { invalido: true };
                    }
                    return null;
            }
        };
    };
    Sobre_PlanosComponent.prototype.ValidaTermo = function () {
        var _this = this;
        return function (control) {
            if (_this.item.pessoal_icTermo === true) {
                return null;
            }
            else {
                return { invalido: true };
            }
        };
    };
    Sobre_PlanosComponent.prototype.ValorCielo = function (valor) {
        return valor.toFixed(2).toString().replace(".", "");
    };
    Sobre_PlanosComponent.prototype.cbxDocumento_Changed = function () {
        if (this.item.pessoal_cdDocumento === '1') {
            this.maskDocumento = "000.000.000-00";
        }
        else {
            this.maskDocumento = "00.000.000/0000-00";
        }
    };
    Sobre_PlanosComponent.prototype.tbxTelefone_Blur = function () {
        if (this.item.pessoal_nuTelefone.trim().length === 10) {
            this.item.pessoal_nuTelefone += " ";
        }
    };
    Sobre_PlanosComponent.prototype.tbxTelefone_Changed = function () {
        if (this.item.pessoal_nuTelefone.trim().length === 11) {
            this.mask = "(00) 00000-0009";
        }
        else {
            this.mask = "(00) 0000-00009";
        }
    };
    /* ===========================================================================================
     *  Edinaldo FIPE
     *  Dez/2020
     *  Pesquisa o Logradouro pelo CEP
     ===========================================================================================*/
    Sobre_PlanosComponent.prototype.fnCep = function (cep) {
        cep = cep.replace(/ /gi, '');
        cep = cep.replace(/\-/gi, '');
        if (cep.length == 8) {
            var sUrl = this.url_Cep + cep + '/json/';
            this.getCEPs(sUrl);
        }
    };
    Sobre_PlanosComponent.prototype.getCEPs = function (url) {
        var _this = this;
        fetch(url)
            .then(function (res) { return res.json(); })
            .then(function (json) { return _this.showContent(json); });
    };
    Sobre_PlanosComponent.prototype.showContent = function (cep) {
        this.item.pessoal_dsCEP = cep.cep;
        this.item.pessoal_dsEndereco = cep.logradouro;
        this.item.pessoal_dsNumero = '';
        this.item.pessoal_dsComplemento = '';
        this.item.pessoal_dsBairro = cep.bairro;
        this.item.pessoal_dsMunicipio = cep.localidade;
        this.item.pessoal_dsEstado = cep.uf;
    };
    Sobre_PlanosComponent.prototype.fnAddFile = function () {
        var _this = this;
        var input = document.getElementById('control_comprovante');
        var arquivo = input.files[0];
        //if arquivo = 
        var fd = new FormData();
        fd.append(arquivo.name, arquivo);
        fd.append("idPedido", this.retorno_assinar.idPedido);
        this.dbService.postFile("Assinatura/EnviaEmailComprovante", fd).subscribe(function (result) {
            _this.spinnerService.stop();
            _this.enviado = 'ok';
        }, function (err) {
            _this.enviado = 'nok';
        });
    };
    Sobre_PlanosComponent.prototype.fnChangeFile = function () {
        var input = document.getElementById('control_comprovante');
        var arquivo = input.files[0];
        document.getElementById('comprovante_texto').innerHTML = '<b style="color: #20a1fa;">' + arquivo.name + '</b>';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("login"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__app_login_app_login_component__["a" /* AppLoginModalComponent */])
    ], Sobre_PlanosComponent.prototype, "login", void 0);
    Sobre_PlanosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sobre-planos',
            template: __webpack_require__("./src/app/components/sobre-salariometro/planos/planos.component.html"),
            styles: [__webpack_require__("./src/app/components/sobre-salariometro/planos/planos.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_5__spinner_service__["a" /* SpinnerService */]])
    ], Sobre_PlanosComponent);
    return Sobre_PlanosComponent;
}());



/***/ }),

/***/ "./src/app/components/sobre-salariometro/quem-somos/quem-somos.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BANNER -->\r\n<div class=\"topo\">\r\n    <div class=\"topo-titulo\">QUEM SOMOS</div>\r\n    <div class=\"topo-nav\">\r\n        <nav aria-label=\"breadcrumb\">\r\n            <ol class=\"breadcrumb\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a [routerLink]=\"['/home']\">HOME</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">QUEM SOMOS</li>\r\n            </ol>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<!-- / BANNER -->\r\n\r\n<div class=\"content\">\r\n    <div class=\"app-nc-quem-somos\">\r\n        <div class=\"formulario\">\r\n            <div class=\"col-12\">\r\n\r\n                <!-- TITLE AND CONTENT-->\r\n                <div class=\"titulo_pagina\">Conheça o Salariômetro</div>\r\n                <div class=\"corpo_texto\">\r\n                        O Projeto Salariômetro da Fipe teve início em dezembro de 2012, quando os primeiros dados começaram a ser coletados e tabulados. \r\n                        Em junho de 2013 foi criada a página inicialmente denominada Salarios.org.br, que disponibilizava apenas 3 resultados da negociação coletiva: reajustes salariais, pisos salariais e programas de participação em lucros e resultados (PLR). \r\n                        Alguns meses depois, o projeto lançou a ferramenta Salariômetro que, desde então, se tornou uma referência na consulta de salários de mercado.\r\n                </div>\r\n\r\n                <div class=\"accordion_wrap\">\r\n                    <div class=\"accordion-item\">\r\n\r\n                        <!-- ACCORDION 01 -->\r\n                        <div class=\"panel collapsed-bg\">\r\n                            <a data-toggle=\"collapse\" href=\"#secao-01\" aria-expanded=\"true\" aria-controls=\"secao-01\">\r\n                                01. O que é o Salariômetro\r\n                            </a>\r\n                            <div id=\"secao-01\" class=\"collapse show\">\r\n                                <p>A Fipe acredita que uma das condições para o bom funcionamento dos mercados é a existência de informações e a facilidade de acesso a elas. \r\n                                    Informações abundantes, confiáveis e acessíveis contribuem para a segurança na tomada de decisões, tanto no lado da produção como no lado do consumo e beneficiam a todos os envolvidos nas transações econômicas. \r\n                                    Por essa razão, a Fipe define como sua missão principal a produção e a disseminação de informações econômicas.\r\n                                </p> \r\n                                <p>  \r\n                                    Entre os vários projetos da Fipe, o Salariômetro tem o objetivo de produzir e oferecer informações sobre o mercado de trabalho brasileiro. O projeto tem duas características que o distinguem: a originalidade do conteúdo e a agilidade na disseminação.\r\n                                </p>\r\n                                <p>\r\n                                    O Salariômetro oferece três grupos de informações:\r\n                                        <br />&emsp; • Resultados da negociação coletiva;\r\n                                        <br />&emsp; • Pesquisa salarial;\r\n                                        <br />&emsp; • Indicadores do mercado de trabalho.\r\n                                </p>\r\n                                <p>\r\n                                    O projeto atualiza continuamente esta página e produz o <a [routerLink]=\"['/sobre/boletim']\" style=\"font-weight: bold; color: #33a9f4;\">Boletim Mensal Salariômetro</a>.\r\n                                </p>    \r\n                            </div>\r\n                        </div>\r\n                        <!-- / ACCORDION 01 -->\r\n\r\n                        <!-- ACCORDION 02 -->\r\n                        <div class=\"panel collapsed-bg\">\r\n                            <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#secao-02\" aria-expanded=\"false\">\r\n                                02. Resultados da Negociação Coletiva Geral\r\n                            </a>\r\n                            <div id=\"secao-02\" class=\"collapse\">\r\n                                <p>\r\n                                   No Brasil ocorrem 40 a 50 mil negociações coletivas por ano, que resultam em acordos coletivos, termos aditivos de acordos coletivos, convenções coletivas e termos aditivos de convenções coletivas. \r\n                                   Quando a negociação é concluída, as partes envolvidas depositam e validam o texto final na página criada pelo Ministério do Trabalho e Emprego, denominada <a href=\"http://www3.mte.gov.br/sistemas/mediador/\" target=\"_blank\"style=\"font-weight: bold; color: #33a9f4;\">Mediador</a>.  \r\n                                </p>\r\n                                <p>\r\n                                    Quando o instrumento negociado é publicado no Mediador, torna-se um documento público, ou seja, qualquer cidadão pode acessá-lo.\r\n                                    A Fipe baixa diariamente os novos instrumentos em seus servidores e a equipe técnica do Projeto Salariômetro lê os conteúdos com auxílio de um programa de leitura virtual. \r\n                                    A equipe extrai e tabula os conteúdos de 40 tipos de cláusulas, transformando-os em informações quantitativas com as quais alimenta e atualiza o banco de dados dos resultados da negociação.\r\n                                </p>\r\n                                <p>\r\n                                    A página Salariômetro oferece aos usuários cadastrados por meio de um <a [routerLink]=\"['/sobre/planos']\" style=\"color: #33a9f4; font-weight: bold;\">Plano de Assinatura</a> acesso ao conjunto completo de resultados tabulados, agregados para todo o território nacional e para todas as atividades. \r\n                                    Resultados desagregados espacialmente (por UF), por setor e por atividade são disponibilizados por meio de um <a [routerLink]=\"['/sobre/planos']\" style=\"font-weight: bold; color: #33a9f4;\"> Plano de Assinatura</a>.\r\n                                </p>\r\n                                <p>\r\n                                    Veja a seguir a lista dos resultados da negociação coletiva disponibilizados no Projeto Salariômetro. Clique no nome dos resultados para conhecer os respectivos detalhes.\r\n                                </p>\r\n                                <p>\r\n                                    Abonos\r\n                                    <br />&emsp;Abono Aposentadoria\r\n                                    <br />&emsp;Abono Assiduidade\r\n                                    <br />&emsp;Abono Compensatório\r\n                                    <br />&emsp;Abono Indenizatório\r\n                                    <br />&emsp;Abono Produtividade\r\n                                    <br />&emsp;Abono por Tempo de Serviço\r\n                                    <br />&emsp;Outros Abonos\r\n                                </p>\r\n                                <p>\r\n                                    Adicionais\r\n                                    <br />Adicional Noturno\r\n                                    <br />Adicional de Periculosidade\r\n                                    <br />Adicional de Sobreaviso\r\n                                    <br />Adicional por Tempo de Serviço\r\n                                </p>\r\n                                <p>\r\n                                    Auxílios\r\n                                    <br />&emsp;Auxílio Creche\r\n                                    <br />&emsp;Auxílio Doença/Invalidez\r\n                                    <br />&emsp;Auxílio Educação\r\n                                    <br />&emsp;Auxílio Funeral/Morte\r\n                                    <br />&emsp;Auxílio Maternidade\r\n                                    <br />&emsp;Auxílio Transporte\r\n                                </p>\r\n                                <p>\r\n                                    Benefícios\r\n                                    <br />Alimentação\r\n                                    <br />Aposentadoria Complementar\r\n                                    <br />Plano Odontológico\r\n                                    <br />Plano de Saúde\r\n                                    <br />Seguro de Vida\r\n                                    <br />Convênio Farmácia\r\n                                </p>\r\n                                <p>\r\n                                    Contribuições para Sindicatos de Empresas\r\n                                    <br />Contribuições para Sindicatos de Empresas - Associativa\r\n                                    <br />Contribuições para Sindicatos de Empresas - Confederativa\r\n                                    <br />Contribuições para Sindicatos de Empresas - Negocial\r\n                                    <br />Contribuições para Sindicatos de Empresas - Sindical (antigo Imposto Sindical)\r\n                                    <br />Contribuições para Sindicatos de Empresas - por Serviços\r\n                                    <br />Contribuições para Sindicatos de Empresas - Outras Contribuições                            \r\n                                </p>\r\n                                <p>\r\n                                    Contribuições para Sindicatos de Trabalhadores\r\n                                    <br />Contribuições para Sindicatos de Trabalhadores - associativa\r\n                                    <br />Contribuições para Sindicatos de Trabalhadores - Confederativa\r\n                                    <br />Contribuições para Sindicatos de Trabalhadores - Negocial\r\n                                    <br />Contribuições para Sindicatos de Trabalhadores - Sindical (antigo Imposto Sindical)\r\n                                    <br />Contribuições para Sindicatos de Trabalhadores - por Serviços\r\n                                    <br />Contribuições para Sindicatos de Trabalhadores - Outras Contribuições                                \r\n                                </p>\r\n                                <p>\r\n                                    Jornada de Trabalho\r\n                                    <br />Adicional de Horas Extras\r\n                                    <br />Banco de Horas\r\n                                </p>\r\n                                <p>\r\n                                    Salários e Remuneração Variável\r\n                                    <br />Reajuste salarial\r\n                                    <br />Piso Salarial\r\n                                    <br />PLR\r\n                                </p>\r\n                                <p style=\"font-size: 18px;\"><strong>Veja uma <a [routerLink]=\"['/negociacao-coletiva-geral-demo']\" style=\"color: #33a9f4; font-weight: bold;\">demonstração</a> com nossos dados de 2018.</strong></p>\r\n                            </div>\r\n                        </div>\r\n                        <!-- / ACCORDION 02 -->\r\n\r\n                        <!-- ACCORDION 03 -->\r\n                        <div class=\"panel collapsed-bg\">\r\n                                <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#secao-05\" aria-expanded=\"false\">\r\n                                    03. Negociação Coletiva Customizável\r\n                                </a>\r\n                                <div id=\"secao-05\" class=\"collapse\">\r\n                                    <p>\r\n                                        O Salariômetro da Fipe desenhou uma assinatura para acompanhar\r\n                                        negociações coletivas, ajustada para as necessidades de cada assinante. O\r\n                                        novo produto consolida e detalha os resultados da negociação das seguintes\r\n                                        situações:\r\n                                    </p>\r\n                                        <table class=\"table custom-table\">\r\n                                            <thead>\r\n                                              <tr>\r\n                                                <th class=\"first-column\">Âmbito das negociações</th>\r\n                                                <th>Resultados disponibilizados</th>\r\n                                              </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                              <tr>\r\n                                                <td class=\"first-column\">Assinante</td>\r\n                                                <td>\r\n                                                    Negociações conduzidas\r\n                                                    pelo próprio assinante\r\n                                                    (empresa ou sindicato patronal)\r\n                                                </td>\r\n                                              </tr>\r\n                                              <tr>\r\n                                                <td class=\"first-column\">Mesmos sindicatos laborais</td>\r\n                                                <td>\r\n                                                    Negociações dos sindicatos laborais que\r\n                                                    representam os empregados do assinante, com\r\n                                                    outras empresas ou outros sindicatos patronais\r\n                                                </td>\r\n                                              </tr>\r\n                                              <tr>\r\n                                                <td class=\"first-column\">Referências empresariais</td>\r\n                                                <td>\r\n                                                    Negociações conduzidas por empresas ou \r\n                                                    sindicatos patronais de interesse do assinante\r\n                                                </td>\r\n                                              </tr>\r\n                                              <tr>\r\n                                                <td class=\"first-column\">Referências laborais</td>\r\n                                                <td>\r\n                                                    Negociações de outros sindicatos laborais de\r\n                                                    interesse do assinante\r\n                                                </td>\r\n                                              </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    \r\n                                    <p>\r\n                                        Recursos disponibilizados: a tela de consulta, no formato Power BI:<br />\r\n                                        <br />&emsp; • <strong>Informa</strong> a frequência absoluta e relativa de mais de 40 resultados da\r\n                                                        negociação e também o valor médio e mediano de resultados\r\n                                                    representados por grandezas numéricas.\r\n                                        <br />&emsp; • <strong>Inclui</strong> os resultados dos instrumentos coletivos com início de vigência no\r\n                                                        intervalo dos 12 meses anteriores, bem como os com início de vigência\r\n                                                        anterior aos 12 meses e que continuem válidos no momento da consulta\r\n                                                        (instrumentos com vigência maior que 12 meses).\r\n                                        <br />&emsp; • <strong>Permite</strong> escolher o intervalo inteiro dos 12 últimos meses, de alguns\r\n                                                        meses, ou de um mês.\r\n                                        <br />&emsp; • <strong>Permite</strong> também separar resultados de acordos coletivos e de convenções\r\n                                                        coletivas.\r\n                                        <br />&emsp; • <strong>Permite</strong> ainda consultar o texto completo de cada instrumento coletivo,\r\n                                                        identificar as partes que o assinam e acessar os respectivos resultados\r\n                                                        negociados, individualizados.\r\n                                        <br />&emsp; • <strong>Associa</strong> um link a cada instrumento, para acessar o respectivo conteúdo,\r\n                                                        diretamente na página MEDIADOR\r\n                                                        Atualização: O banco de dados diariamente, mas há uma demora entre a\r\n                                                        assinatura do instrumento coletivo e a disponibilização no MEDIADOR.\r\n                                        <br /><br />\r\n                                        <strong>Atualização:</strong> O banco de dados diariamente, mas há uma demora entre a\r\n                                        assinatura do instrumento coletivo e a disponibilização no MEDIADOR.\r\n                                        <br /><br />\r\n                                        <strong>Inputs do assinante:</strong> O interessado precisa apenas informar seus CNPJs e o\r\n                                        CNPJ das empresas ou sindicatos de referência. O Salariômetro consolidará\r\n                                        todos os instrumentos referenciados aos CNPJs e os consolidará para\r\n                                        consultas.\r\n                                        <br /><br />\r\n                                        <strong>Validade da assinatura:</strong> A assinatura é anual e o acesso às telas de consulta\r\n                                        é liberado mediante o pagamento da anuidade ou a formalização da compra.\r\n                                        <strong>Preço e condições (na fase de lançamento da assinatura customizada)</strong>               \r\n                                        O preço da assinatura customizada anual é formado por duas partes, uma fixa\r\n                                        de R$4.000,00 e outra variável, que depende da quantidade de instrumentos\r\n                                        selecionados pelo assinante. O preço unitário dos instrumentos diminui à\r\n                                        medida que a quantidade aumenta. As tabelas abaixo apresentam a\r\n                                        precificação da parte variável para quantidades de até 1.000 instrumentos\r\n                                        (Tabela 1) e o preço total da assinatura (Tabela 2). O preço unitário dos\r\n                                        instrumentos selecionados é R$35,00, para os primeiros 200, R$25,00 partir do\r\n                                        201º até o 500º, e R$15,00 a partir do 501º.\r\n                                        <br /><br />\r\n                                    </p>\r\n                                    <strong style=\"margin-left: 210px;\">Tabela 1: Preço de cada instrumento selecionado</strong>\r\n                                    <table class=\"table custom-table2\">\r\n                                        <thead>\r\n                                          <tr>\r\n                                            <th class=\"first-column2\">Quantidade de instrumentos</th>\r\n                                            <th>Preço unitário</th>\r\n                                          </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                          <tr>\r\n                                            <td class=\"first-column2\">até 200</td>\r\n                                            <td>\r\n                                                R$ 35,00\r\n                                            </td>\r\n                                          </tr>\r\n                                          <tr>\r\n                                            <td class=\"first-column2\">201 a 500</td>\r\n                                            <td>\r\n                                                R$ 25,00\r\n                                            </td>\r\n                                          </tr>\r\n                                          <tr>\r\n                                            <td class=\"first-column2\">501 a 1.000</td>\r\n                                            <td>\r\n                                                R$ 15,00\r\n                                            </td>\r\n                                          </tr>\r\n                                          <tr>\r\n                                            <td class=\"first-column2\">Acima de 1.000</td>\r\n                                            <td>\r\n                                                R$ 10,00\r\n                                            </td>\r\n                                          </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                    <p>\r\n                                        A Tabela 2 apresenta o preço de assinaturas na fase de lançamento, para\r\n                                        quantidades com intervalos de 50 instrumentos, incluindo a parte fixa e a parte\r\n                                        variável.\r\n                                    </p>\r\n                                    <strong>Tabela 2: Preço da assinatura customizada em função da quantidade de instrumentos selecionados </strong>\r\n                                    <table class=\"table custom-table2\">\r\n                                        <thead>\r\n                                          <tr>\r\n                                            <th class=\"first-column3\" rowspan=\"2\">Quantidade de instrumentos</th>\r\n                                            <th colspan=\"3\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Preço</th>\r\n                                          </tr>\r\n                                          <tr>\r\n                                            <th class=\"first-column3\">Parte fixa</th>\r\n                                            <th class=\"first-column3\">Parte variável</th>\r\n                                            <th class=\"first-column3\">Total</th>\r\n                                          </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr><td class=\"first-column3\">0</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 0</td><td class=\"first-column3\">R$ 4.000</td></tr>\r\n                                            <tr><td class=\"first-column3\">50</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 1.750</td><td class=\"first-column3\">R$ 5.750</td></tr>\r\n                                            <tr><td class=\"first-column3\">100</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 3.500</td><td class=\"first-column3\">R$ 7.500</td></tr>\r\n                                            <tr><td class=\"first-column3\">150</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 5.250</td><td class=\"first-column3\">R$ 9.250</td></tr>\r\n                                            <tr><td class=\"first-column3\">200</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 7.000</td><td class=\"first-column3\">R$ 11.000</td></tr>\r\n                                            <tr><td class=\"first-column3\">250</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 8.250</td><td class=\"first-column3\">R$ 12.250</td></tr>\r\n                                            <tr><td class=\"first-column3\">300</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 9.500</td><td class=\"first-column3\">R$ 13.500</td></tr>\r\n                                            <tr><td class=\"first-column3\">350</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 10.750</td><td class=\"first-column3\">R$ 14.750</td></tr>\r\n                                            <tr><td class=\"first-column3\">400</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 12.000</td><td class=\"first-column3\">R$ 16.000</td></tr>\r\n                                            <tr><td class=\"first-column3\">50</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 13.250</td><td class=\"first-column3\">R$ 17.250</td></tr>\r\n                                            <tr><td class=\"first-column3\">500</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 14.500</td><td class=\"first-column3\">R$ 18.500</td></tr>\r\n                                            <tr><td class=\"first-column3\">550</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 15.250</td><td class=\"first-column3\">R$ 19.250</td></tr>\r\n                                            <tr><td class=\"first-column3\">600</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 16.000</td><td class=\"first-column3\">R$ 20.000</td></tr>\r\n                                            <tr><td class=\"first-column3\">650</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 16.750</td><td class=\"first-column3\">R$ 20.750</td></tr>\r\n                                            <tr><td class=\"first-column3\">700</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 17.500</td><td class=\"first-column3\">R$ 21.500</td></tr>\r\n                                            <tr><td class=\"first-column3\">750</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 18.250</td><td class=\"first-column3\">R$ 22.250</td></tr>\r\n                                            <tr><td class=\"first-column3\">800</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 19.000</td><td class=\"first-column3\">R$ 23.000</td></tr>\r\n                                            <tr><td class=\"first-column3\">850</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 19.750</td><td class=\"first-column3\">R$ 23.750</td></tr>\r\n                                            <tr><td class=\"first-column3\">900</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 20.500</td><td class=\"first-column3\">R$ 24.500</td></tr>\r\n                                            <tr><td class=\"first-column3\">950</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 21.250</td><td class=\"first-column3\">R$ 25.250</td></tr>\r\n                                            <tr><td class=\"first-column3\">1000</td><td class=\"first-column3\">R$ 4.000</td><td class=\"first-column3\">R$ 22.000</td><td class=\"first-column3\">R$ 26.000</td></tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                    <p>\r\n                                        <strong>Orçamento e demonstração</strong><br />\r\n                                        Envie seus CNPJs e os CNPJs das empresas e sindicatos que deseja acompamhar como referências e retornaremos com o orçamento da sua assinatura. Teremos muito prazer também em oferecer uma demonstração dos recursos da assinatura customizável do Salariômetro, utilizando os CNPJs enviados.\r\n\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <!-- / ACCORDION 03 -->\r\n\r\n                            <!-- ACCORDION 03 -->\r\n                            <div class=\"panel collapsed-bg\">\r\n                                <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#secao-04\" aria-expanded=\"false\">\r\n                                    04. Pesquisa Salarial\r\n                                </a>\r\n                                <div id=\"secao-04\" class=\"collapse\">\r\n                                    <p>\r\n                                        A equipe do Salariômetro utiliza os dados do CAGED para construir mais esta ferramenta, no formato de uma <a [routerLink]=\"['/pesquisa-salarial']\" style=\"color: #33a9f4; font-weight: bold;\" >Pesquisa Salarial</a>. \r\n                                        A Pesquisa Salarial disponibiliza a distribuição dos salários médios e medianos para cada uma das <b>{{countCbo}}</b> ocupações da Classificação Brasileira das Ocupações – CBO, desagregada segundo os cinco setores: Indústria, Construção Civil, Comércio, Serviços e Agropecuária. \r\n                                        A ferramenta informa os salários dos contratados e também dos desligados, oferendo o quadro completo da evolução salarial dentro das organizações. Para cada ocupação, o salário é apresentado de acordo com três distribuições: Quartis, Faixa Etária e Escolaridade.\r\n                                    </p>\r\n                                    <p>\r\n                                        Na página Salariômetro, o usuário cadastrados por meio de um <a [routerLink]=\"['/sobre/planos']\" style=\"color: #33a9f4; font-weight: bold;\">Plano de Assinatura</a>, pode ter acesso ao conjunto completo da pesquisa salarial agregada para todo o território nacional ou resultados desagregados por UF e/ou por município.\r\n                                    </p>\r\n                                    <p>\r\n                                        Para saber mais sobre a metodologia e os detalhes técnicos da Pesquisa Salarial, clique <a [routerLink]=\"['/sobre/metodologia']\" style=\"color: #33a9f4; font-weight: bold;\">aqui</a>.\r\n                                    </p>\r\n                                    <p style=\"font-size: 18px;\"><strong>Veja uma <a [routerLink]=\"['/pesquisa-salarial-demo']\" style=\"color: #33a9f4; font-weight: bold;\">demonstração</a> com nossos dados de 2018.</strong></p>\r\n                                </div>\r\n                            </div>\r\n                            <!-- / ACCORDION 03 -->\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"lateral\">\r\n\r\n            <!-- LINKS LATERAL -->\r\n            <h4 class=\"lateral_titulo\">VEJA TAMBÉM</h4>\r\n            <div class=\"lateral_link fixo\" [routerLink]=\"['/sobre/quem-somos']\">Quem Somos</div>\r\n            <div class=\"lateral_link\" [routerLink]=\"['/sobre/metodologia']\">Metodologia</div>\r\n            <div class=\"lateral_link\" [routerLink]=\"['/sobre/boletim']\">Boletim Mensal</div>\r\n            <div class=\"lateral_link\" [routerLink]=\"['/sobre/planos']\">Planos de Assinatura</div>\r\n            <!-- / LINKS LATERAL -->\r\n\r\n            <!-- CALL TO ACTION -->\r\n            <div class=\"lateral_caixa_azul\">\r\n                <h4 class=\"lateral_titulo_01\">Mais conteúdo para você</h4>\r\n                Tenha acesso aos conteúdos regionais e setoriais\r\n                <button type=\"button\" class=\"btn btn-primary\" style=\"margin-top: 10px\" [routerLink]=\"['/sobre/planos']\">PLANOS DE ASSINATURA</button>\r\n            </div>\r\n            <!-- / CALL TO ACTION -->\r\n\r\n            <!-- CONTACT -->\r\n            <div class=\"lateral_caixa_cinza\">\r\n                <h4 class=\"lateral_titulo_02\">Precisa de ajuda?</h4>\r\n                Para dúvidas ou sugestões, envie um e-mail para:\r\n                <br />\r\n                <b>salarios@fipe.org.br</b>\r\n            </div>\r\n            <!-- / CONTACT -->\r\n\r\n        </div>\r\n\r\n        <!-- <app-login-modal #login></app-login-modal> -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/sobre-salariometro/quem-somos/quem-somos.component.scss":
/***/ (function(module, exports) {

module.exports = ".topo {\n  background-image: url(\"/assets/topos/quem_somos.png\"); }\n\n.app-nc-quem-somos {\n  margin-left: auto;\n  margin-right: auto;\n  width: 1149px; }\n\n.app-nc-quem-somos .formulario {\n    float: left;\n    padding-right: 40px;\n    width: calc(100% - 240px);\n    font-size: 14px;\n    margin-top: 30px; }\n\n.app-nc-quem-somos .lateral {\n    float: left;\n    margin-top: 30px;\n    width: 240px; }\n\n.row.member {\n  margin-right: -15px; }\n\n.row.member .team-area .single-team-member {\n    margin-bottom: 30px; }\n\n.row.member .bg_gray {\n    background-color: #ebf0f4; }\n\n.row.member .team-member-thumbnail {\n    position: relative;\n    overflow: hidden; }\n\n.row.member .team-member-thumbnail img {\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    height: auto;\n    margin: -10px 0 0 -10px;\n    max-width: none;\n    -webkit-transform: translate3d(10px, 10px, 0px);\n            transform: translate3d(10px, 10px, 0px);\n    -webkit-transition: opacity 0.35s ease 0s, -webkit-transform 0.35s ease 0s;\n    transition: opacity 0.35s ease 0s, -webkit-transform 0.35s ease 0s;\n    transition: opacity 0.35s ease 0s, transform 0.35s ease 0s;\n    transition: opacity 0.35s ease 0s, transform 0.35s ease 0s, -webkit-transform 0.35s ease 0s;\n    width: calc(100% + 10px); }\n\n.row.member .team-member-details {\n    padding: 15px; }\n\n.row.member .single-team-member .caps_small {\n    display: block;\n    font-weight: 700;\n    margin-top: 12px; }\n\n.row.member .caps_small {\n    font: 9px Lato;\n    text-transform: uppercase;\n    letter-spacing: 3.15px;\n    color: #33a9f4; }\n\n.row.member .single-team-member {\n    margin-bottom: 15px; }\n\n.row.member .col-sm-4.space {\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px; }\n\n#last_row_member {\n  padding-bottom: 80px; }\n\nh6 {\n  margin-bottom: 0; }\n\n.first-column {\n  width: 30%; }\n\n.first-column2 {\n  width: 70%;\n  text-align: left; }\n\n.first-column3 {\n  width: 25%;\n  text-align: left; }\n\n.custom-table {\n  width: 80%;\n  margin-left: 80px;\n  text-align: left; }\n\n.custom-table2 {\n  width: 50%;\n  margin-left: 200px;\n  text-align: left; }\n"

/***/ }),

/***/ "./src/app/components/sobre-salariometro/quem-somos/quem-somos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sobre_QuemSomosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db_service__ = __webpack_require__("./src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spinner_service__ = __webpack_require__("./src/app/spinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Sobre_QuemSomosComponent = (function () {
    function Sobre_QuemSomosComponent(dbService, spinnerService) {
        var _this = this;
        this.dbService = dbService;
        this.spinnerService = spinnerService;
        this.countCbo = '';
        this.load();
        this.dbService.get('CBO/Count').subscribe(function (result) {
            // Encerra spinner
            _this.spinnerService.stop();
            // Guarda objetos
            _this.countCbo = result;
        });
    }
    Sobre_QuemSomosComponent.prototype.load = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(document).ready(function () {
            var acc = document.getElementsByClassName("accordion");
            var i;
            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function () {
                    /* Toggle between adding and removing the "active" class,
                    to highlight the button that controls the panel */
                    this.classList.toggle("active");
                    /* Toggle between hiding and showing the active panel */
                    var panel = this.nextElementSibling;
                    if (panel.style.display === "block") {
                        panel.style.display = "none";
                    }
                    else {
                        panel.style.display = "block";
                    }
                });
            }
        });
    };
    Sobre_QuemSomosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sobre-quem-somos',
            template: __webpack_require__("./src/app/components/sobre-salariometro/quem-somos/quem-somos.component.html"),
            styles: [__webpack_require__("./src/app/components/sobre-salariometro/quem-somos/quem-somos.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_3__spinner_service__["a" /* SpinnerService */]])
    ], Sobre_QuemSomosComponent);
    return Sobre_QuemSomosComponent;
}());



/***/ }),

/***/ "./src/app/components/solicitacoes-especiais/solicitacoes-especiais.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BANNER -->\r\n<div class=\"topo\">\r\n    <div class=\"topo-titulo\">{{this.descricao.toUpperCase()}}</div>\r\n    <div class=\"topo-nav\">\r\n        <nav aria-label=\"breadcrumb\">\r\n            <ol class=\"breadcrumb\">\r\n                <li class=\"breadcrumb-item\">\r\n                    <a [routerLink]=\"['/home']\">HOME</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">{{this.descricao.toUpperCase()}}</li>\r\n            </ol>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<!-- / BANNER -->\r\n\r\n<div class=\"content\">\r\n    <div class=\"app-solicitacoes-especiais\">\r\n        <div class=\"formulario\">\r\n            \r\n            <!-- TITLE AND CONTENT -->\r\n            <div class=\"col-12\">\r\n                <div class=\"titulo_pagina\">{{this.descricao}}</div>\r\n                <div class=\"corpo_texto\">\r\n                    \r\n                </div>\r\n            </div>            \r\n            <!-- / TITLE AND CONTENT -->\r\n            <div class=\"col-12\" *ngIf=\"!showBloqueio\">\r\n                <button class=\"btn btn-secondary\" (click)=\"fullscreen()\" *ngIf=\"!showBloqueio\">[ + ]</button><br />\r\n                <div #embeddedReport style=\"width:1150px; height:700px; border-style:hidden;\"></div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/solicitacoes-especiais/solicitacoes-especiais.component.scss":
/***/ (function(module, exports) {

module.exports = ".topo {\n  background-image: url(\"/assets/topos/pesquisa_salarial.png\"); }\n\n.app-solicitacoes-especiais {\n  margin-left: auto;\n  margin-right: auto;\n  width: 1149px; }\n\n.app-solicitacoes-especiais .formulario {\n    float: left;\n    padding-right: 20px;\n    width: calc(100% - 240px);\n    margin-top: 20px;\n    margin-bottom: 80px; }\n\n.app-solicitacoes-especiais .formulario .titulo {\n      font-size: 16px;\n      color: #fff;\n      text-align: left;\n      background-image: url(/assets/table_header.png);\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-bottom: 25px; }\n\n.app-solicitacoes-especiais .formulario .titulo_faixaescola {\n      font-size: 14px;\n      color: #fff;\n      text-align: left;\n      background-image: url(/assets/table_header.png);\n      padding-left: 10px;\n      padding-right: 10px;\n      padding-bottom: 15px; }\n\n.app-solicitacoes-especiais .lateral {\n    float: left;\n    margin-top: 25px;\n    width: 240px; }\n\n.validacao {\n  padding-left: 15px; }\n\n.pesqsalarial-label {\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n  font-size: 16px;\n  color: #2C2929;\n  text-align: left;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 5px; }\n\niframe {\n  border: none; }\n"

/***/ }),

/***/ "./src/app/components/solicitacoes-especiais/solicitacoes-especiais.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitacoesEspeciaisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_login_app_login_component__ = __webpack_require__("./src/app/components/app-login/app-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db_service__ = __webpack_require__("./src/app/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spinner_service__ = __webpack_require__("./src/app/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SolicitacoesEspeciaisComponent = (function () {
    function SolicitacoesEspeciaisComponent(_scrollToService, dbService, router, route, sessionService, spinnerService) {
        this._scrollToService = _scrollToService;
        this.dbService = dbService;
        this.router = router;
        this.route = route;
        this.sessionService = sessionService;
        this.spinnerService = spinnerService;
        this.showBloqueio = false;
        this.descricao = this.route.snapshot.params['dsRelatorio'];
        this.fnPesquisar();
    }
    SolicitacoesEspeciaisComponent.prototype.fnPesquisar = function () {
        var _this = this;
        var sessao = JSON.parse(sessionStorage.getItem('sessao_usuario') || '{}');
        var idRelatorioPB = this.route.snapshot.params['idRelatorioPB'];
        var dsRelatorio = this.route.snapshot.params['dsRelatorio'];
        //this.dbService.post('EmbedInfo/VerificaPermissaoNCP', sessao.hash).subscribe(resultPersonalizado => {
        // if (!resultPersonalizado.permissao)
        // {
        // this.dbService.post('EmbedInfo/VerificaSolicitacoesEspeciais', { hash: sessao.hash, relatorio: dsReportId }).subscribe(resultComum => {
        //     if (!resultComum.permissao) 
        //     {
        //         this.fnScrollTo();
        //         this.showBloqueio = true;
        //     } else {
        var url = 'EmbedInfo/GetSolicitacoesEspeciais?idRelatorio=' + idRelatorioPB;
        this.dbService.get(url).subscribe(function (result) {
            var pages = [];
            var model = window['powerbi-client'].models;
            var basicFilter = {
                $schema: "http://powerbi.com/product/schema#basic",
                target: {
                    table: "VW_ASSINATURAS_ATIVAS_NC",
                    column: "IdCliente"
                },
                operator: "In",
                values: [sessao.idUsuario],
                filterType: model.FilterType.BasicFilter,
            };
            _this.config = result;
            var embedConfig = {
                type: 'report',
                tokenType: model.TokenType.Embed,
                accessToken: result.embedToken.token,
                embedUrl: result.embedReport[0].embedUrl,
                permissions: model.Permissions.All,
                filters: [basicFilter],
                settings: {
                    filterPaneEnabled: false,
                    navContentPaneEnabled: false,
                    layoutType: model.LayoutType.Custom,
                    customLayout: {
                        displayOption: model.DisplayOption.FitToWidth
                    }
                }
            };
            var report = powerbi.embed(_this.embeddedReport.nativeElement, embedConfig);
            report.fullscreen();
        });
    };
    SolicitacoesEspeciaisComponent.prototype.fullscreen = function () {
        // Get a reference to the embedded report HTML element
        var embedContainer = this.embeddedReport.nativeElement;
        // Get a reference to the embedded report.
        var report = powerbi.get(embedContainer);
        // Displays the report in full screen mode.
        report.fullscreen();
    };
    SolicitacoesEspeciaisComponent.prototype.fnScrollTo = function () {
        var config = {
            target: 'resultado',
            offset: -97
        };
        this._scrollToService.scrollTo(config);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("login"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__app_login_app_login_component__["a" /* AppLoginModalComponent */])
    ], SolicitacoesEspeciaisComponent.prototype, "login", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('embeddedReport'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], SolicitacoesEspeciaisComponent.prototype, "embeddedReport", void 0);
    SolicitacoesEspeciaisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-solicitacoes-especiais',
            template: __webpack_require__("./src/app/components/solicitacoes-especiais/solicitacoes-especiais.component.html"),
            styles: [__webpack_require__("./src/app/components/solicitacoes-especiais/solicitacoes-especiais.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__nicky_lenaers_ngx_scroll_to__["b" /* ScrollToService */],
            __WEBPACK_IMPORTED_MODULE_2__db_service__["a" /* DbService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_4__spinner_service__["a" /* SpinnerService */]])
    ], SolicitacoesEspeciaisComponent);
    return SolicitacoesEspeciaisComponent;
}());



/***/ }),

/***/ "./src/app/db.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spinner_service__ = __webpack_require__("./src/app/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DbService = (function () {
    function DbService(http, sessionService, spinnerService, router) {
        this.http = http;
        this.sessionService = sessionService;
        this.spinnerService = spinnerService;
        this.router = router;
        this.url_services = window.location.origin.indexOf('localhost') !== -1 ? "http://localhost:55329/api/" : "/service/api/";
        this.url_Cep = "https://";
        this.exibe_spinner = true;
        this.httpOptionsCep = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json'
            })
        };
    }
    DbService.prototype.get = function (url) {
        if (this.exibe_spinner) {
            this.spinnerService.start();
        }
        return this.http.get(this.url_services + url)
            .map(this.extractData);
    };
    DbService.prototype.post = function (url, parametros) {
        var _this = this;
        if (this.exibe_spinner) {
            this.spinnerService.start();
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Hash': this.sessionService.usuario.hash });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url_services + url, JSON.stringify(parametros), options)
            .map(this.extractData)
            .catch(function (err) {
            if (err.status == 401) {
                _this.router.navigate(['/home']);
                _this.sessionService.sessaoDupla = true;
            }
            return __WEBPACK_IMPORTED_MODULE_7_rxjs__["Observable"].throw(err);
        });
    };
    DbService.prototype.postFile = function (url, parametros) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json', 'Hash': this.sessionService.usuario.hash });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url_services + url, parametros, options)
            .catch(function (err) {
            if (err.status === 401) {
                _this.router.navigate(['/login']);
                _this.sessionService.sessaoDupla = true;
            }
            return __WEBPACK_IMPORTED_MODULE_7_rxjs__["Observable"].throw(err);
        });
    };
    DbService.prototype.put = function (url, parametros) {
        if (this.exibe_spinner) {
            this.spinnerService.start();
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Hash': this.sessionService.usuario.hash });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.url_services + url, JSON.stringify(parametros), options).map(this.extractData);
    };
    DbService.prototype.delete = function (url) {
        if (this.exibe_spinner) {
            this.spinnerService.start();
        }
        return this.http.delete(this.url_services + url)
            .map(this.extractData);
    };
    DbService.prototype.extractData = function (res) {
        var body;
        // check if empty, before call json
        if (res.text()) {
            body = res.json();
        }
        return body || {};
    };
    DbService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_3__spinner_service__["a" /* SpinnerService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* Router */]])
    ], DbService);
    return DbService;
}());



/***/ }),

/***/ "./src/app/first-error.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstErrorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FirstErrorPipe = (function () {
    function FirstErrorPipe() {
    }
    FirstErrorPipe.prototype.transform = function (obj) {
        if (obj === null)
            return null;
        var keys = Object.keys(obj);
        if (keys && keys.length > 0) {
            return keys[0];
        }
        return null;
    };
    FirstErrorPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'first_error'
        })
    ], FirstErrorPipe);
    return FirstErrorPipe;
}());



/***/ }),

/***/ "./src/app/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Relatorio */
/* unused harmony export Usuario */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/share.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Relatorio = (function () {
    function Relatorio() {
        this.idPedidoRelatorio = 0;
        this.idPedido = 0;
        this.dsRelatorio = '';
        this.idRelatorioPB = '';
        this.idCliente = '';
        this.dtVigencia = new Date();
    }
    return Relatorio;
}());

var Usuario = (function () {
    function Usuario() {
        this.hash = '';
        this.nmUsuario = '';
        this.idUsuario = 0;
        this.lstRelatorios = [];
        this.nrRelatorios = 0;
    }
    return Usuario;
}());

var SessionService = (function () {
    function SessionService(router) {
        this.router = router;
        this.sessao = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.usuario = new Usuario();
        this.sessaoDupla = false;
        this.avisoAssinatura = false; //EGS 31.12.2020
    }
    SessionService.prototype.fnEncerrarSessao = function () {
        // Encerra sessão
        sessionStorage.removeItem('sessao_usuario');
        this.fnGetSessao();
        // Manda para tela de login
        this.router.navigate(['/home']);
        location.reload();
    };
    SessionService.prototype.fnGetSessao = function () {
        var sessao = JSON.parse(sessionStorage.getItem('sessao_usuario'));
        if (sessao !== null) {
            this.usuario.hash = sessao['hash'];
            this.usuario.nmUsuario = sessao['nmUsuario'];
            this.usuario.idUsuario = sessao['idUsuario'];
            this.usuario.lstRelatorios = sessao['lstRelatorios'];
            this.usuario.nrRelatorios = this.usuario.lstRelatorios.length;
        }
        else {
            this.usuario.hash = '';
            this.usuario.nmUsuario = '';
            this.usuario.idUsuario = 0;
            this.usuario.lstRelatorios = [];
            this.usuario.nrRelatorios = 0;
        }
        this.sessao.next(this.usuario);
    };
    SessionService.prototype.fnSetSessao = function () {
        sessionStorage.setItem('sessao_usuario', JSON.stringify(this.usuario));
        this.sessao.next(this.usuario);
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/spinner.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/share.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpinnerService = (function () {
    function SpinnerService() {
        this.status = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        this._active = false;
    }
    Object.defineProperty(SpinnerService.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (v) {
            this._active = v;
            this.status.next(v);
        },
        enumerable: true,
        configurable: true
    });
    SpinnerService.prototype.start = function () {
        this.active = true;
    };
    SpinnerService.prototype.stop = function () {
        this.active = false;
    };
    SpinnerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], SpinnerService);
    return SpinnerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    //googleAnalyticsId: 'G-4SQ5HVL6ZE'      //HML
    googleAnalyticsId: 'G-LK9Z6VR8LG' //PRD
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map