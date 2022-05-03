import styled from "styled-components";

export const Container = styled.main`

display: grid;
grid-template-columns: auto auto;
padding: 50px;

p{
    color: #b3bdc1;
    width: 80%;
    margin-left: 10%;
}

h1{ 
    margin-top: 10%;
    margin-left: 10%;
    padding: 0;
}

img{
    margin-top: 10%;
    width: 500px;
    border-radius: 10%;
}

.p1{
    margin-left:30%;
    width: 50%;
    color :#1a79e5;
    font-size: 2.3rem;
}

.skills{
    margin-left:13%;

}

.curriculo{
   border: solid;
   border-radius: 5px;
   background-color: #0d1117;
   border-color: #1a79e5;
   border-width: 5px;
   color: white;
   font-size: 1.8rem;
   margin-left:10%;
}

.curriculo:hover{
    color: #9a9e9e;
    transition: 1s;
}


@media (max-width: 800px) {
    display: grid;
    grid-template-columns: auto;

    img{
        width: 70%;
        margin-left: 10%;
    }
}

`;