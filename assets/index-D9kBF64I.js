import{getAuth as c,signInWithEmailAndPassword as d}from"https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";import{initializeApp as l}from"https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";import{getFirestore as u}from"https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:""},a=l(m);u(a);const f=c(a);document.getElementById("loginForm").addEventListener("submit",async i=>{i.preventDefault();const o=document.getElementById("username").value,s=document.getElementById("password").value,n=`${o}@gmail.com`,e=i.target.querySelector('button[type="submit"]');e.disabled=!0;try{const r=(await d(f,n,s)).user;localStorage.setItem("userName",o),window.location.href="html/inicio.html"}catch(t){console.error("Error al iniciar sesión:",t);let r="Error al iniciar sesión. Intente nuevamente.";switch(t.code){case"auth/user-not-found":r="Usuario no encontrado.";break;case"auth/wrong-password":r="Contraseña incorrecta.";break;case"auth/invalid-email":r="Formato de email inválido.";break;case"auth/user-disabled":r="Usuario deshabilitado.";break;case"auth/too-many-requests":r="Demasiados intentos fallidos. Intente más tarde.";break}alert(r)}finally{e.disabled=!1}});const p=()=>{document.getElementById("loginForm").reset()};window.addEventListener("load",p);window.addEventListener("offline",()=>{alert("Se perdió la conexión a internet. Verifique su conexión e intente nuevamente.")});