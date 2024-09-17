<%@ Page Title="" Language="C#" MasterPageFile="~/KhaiBaoYTe/KhaiBaoYTe.Master" AutoEventWireup="true" CodeBehind="KhaiBao.aspx.cs" Inherits="ALSE.KhaiBaoYTe.KhaiBao" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <nav class="form-steps">
        <div class="form-steps__item step-1 form-steps__item--completed">
            <div class="form-steps__item-content">
                <span class="form-steps__item-icon">1</span>
                <span class="form-steps__item-text">Question One</span>
            </div>
        </div>

        <div class="form-steps__item step-2">
            <div class="form-steps__item-content">
                <span class="form-steps__item-icon">2</span>
                <span class="form-steps__item-line"></span>
                <span class="form-steps__item-text">Question Two</span>
            </div>
        </div>

        <div class="form-steps__item step-3">
            <div class="form-steps__item-content">
                <span class="form-steps__item-icon">3</span>
                <span class="form-steps__item-line"></span>
                <span class="form-steps__item-text">Question Three</span>
            </div>
        </div>

        <div class="form-steps__item step-4">
            <div class="form-steps__item-content">
                <span class="form-steps__item-icon">4</span>
                <span class="form-steps__item-line"></span>
                <span class="form-steps__item-text">Question Four</span>
            </div>
        </div>

        <div class="form-steps__item step-5">
            <div class="form-steps__item-content">
                <span class="form-steps__item-icon">5</span>
                <span class="form-steps__item-line"></span>
                <span class="form-steps__item-text">Final Question</span>
            </div>
        </div>
    </nav>

    <div class="container">
        <form action="#" method="post" id="raq_questions">

            <div class="question-title">Question 1</div>

            <div class="question-container active_panel" id="question-1">
                Q1. Question for the client? <br/>
                A. <input type="text" value="" />
            </div>
            <div class="question-container" id="question-2">
                Q2. Question for the client? <br/>
                A. <input type="text" value="" />
            </div>
            <div class="question-container" id="question-3">
                Q3. Question for the client? <br/>
                A. <input type="text" value="" />
            </div>
            <div class="question-container" id="question-4">
                Q4. Question for the client? <br/>
                A. <input type="text" value="" />
            </div>
            <div class="question-container" id="question-5">
                Q5. Question for the client? <br/>
                A. <input type="text" value="" />
            </div>

        </form>

        <div class="button-bar">
            <input type="button" value="Back" id="raq_back">
            <input type="button" value="Next" id="raq_next">
        </div>

    </div>

    <div id="overlay">
        <div class="thankyou">
            <h3>Thank You!</h3>
            <p>Thank you, your form is submited</p>
            <input type="button" id="start-over" value="Start Over">
        </div>
    </div>

    <footer>
        <p>Mostafa Ghanbari
            <script type="text/javascript">var d = new Date(); document.write(d.getFullYear())</script>
        </p>
      <p>
            Open up your console to see more ;)
        </p>
    </footer>
</asp:Content>
