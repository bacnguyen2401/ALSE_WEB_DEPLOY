<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="SuatAnApp.aspx.cs" Inherits="ALSE.QuanLySuatAnApp.SuatAnApp" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/QuanLySuatAnApp.css") %>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
<nav class="nav">
  <a href="#" class="nav__link">
    <i class="material-icons nav__icon">dashboard</i>
    <span class="nav__text">Dashboard</span>
  </a>
  <a href="#" class="nav__link nav__link--active">
    <i class="material-icons nav__icon">person</i>
    <span class="nav__text">Profile</span>
  </a>
  <a href="#" class="nav__link">
    <i class="material-icons nav__icon">devices</i>
    <span class="nav__text">Devices</span>
  </a>
  <a href="#" class="nav__link">
    <i class="material-icons nav__icon">lock</i>
    <span class="nav__text">Privacy</span>
  </a>
  <a href="#" class="nav__link">
    <i class="material-icons nav__icon">settings</i>
    <span class="nav__text">Settings</span>
  </a>
</nav>
</asp:Content>
