#include <iostream>
using namespace std;
int main(){
    int i,j,k,a,b,c;
    cin>>a>>b>>c;
    int arr[a][b][c];
    int sum = 0;
    for(int i = 0; i<a ; i++){
        for(int j=0;j<b;j++){
            for(int k=0;k<c;k++){
            cin>>arr[i][j][k];
            sum+=arr[i][j][k];
            }
        }
    }
    cout<<"sum: "<<sum;
}