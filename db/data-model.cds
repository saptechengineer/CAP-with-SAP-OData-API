namespace CAP_on_AWS.db;

entity Computers
{
    key ID : Integer;
    name : String;
    model : String;
    unitprice : Integer;
    stock : Integer;
}