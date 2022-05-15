#include <iostream>
using namespace std;
int main()

{
    int n;
    cout<<"enter a number to get the row"<<endl;
    cin>>n;
    for(int i=0;i<n;i++)
    {    
        char q=char(65);

        for(int j=0;j<n;j++)
        {
            cout<<q<<" ";
            q++;
        }
        cout<<endl;}
}






















