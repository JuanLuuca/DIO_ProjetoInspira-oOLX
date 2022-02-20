import styled from "styled-components";

export const AccountArea = styled.div`
    form {
        background-color: #FFF;
        border-radius: 3px;
        padding: 10px;
        box-shadow: 0px 0px 3px #999;
        
        h2 {
            font-size: 20px;
        }

        .area {
            display: flex;
            align-items: center;
            padding: 10px;
            max-width: 500px;

            .area--title {
                font-size: 15px;
                font-weight: bold;
                margin-left: 50px;
            }

            .area--input {
                flex: 1;

                p {
                    margin-left: 10px;
                    align-items: center;
                    margin-top: 15px;
                    font-size: 15px;
                    font-family: arial;
                }
            }
        }

        .button {
            background-color: #0089FF;
            border: 0;
            outline: 0;
            padding: 5px 10px;
            border-radius: 4px;
            color: #FFF;
            font-size: 15px;
            cursor: pointer;
            width: 120px;
            text-decoration: none;

            &:hover {
                background-color: #006FCE;
            }
        }
    }
`;

export const PageArea = styled.div`
   h2 {
       font-size: 20px;
   }
   .formArea {
       display: flex;
       flex-wrap: wrap;

       .aditem {
           width: 25%;
       }
   }

   .area--input {
        flex: 1;
        margin-left: 10px;
        margin-top: 30px;


        .button {
            background-color: #0089FF;
            border: 0;
            outline: 0;
            padding: 5px 10px;
            border-radius: 4px;
            color: #FFF;
            font-size: 15px;
            cursor: pointer;
            width: 123px;
            text-decoration: none;
                

            &:hover {
                background-color: #006FCE;
            }
            
        }
    }

`;