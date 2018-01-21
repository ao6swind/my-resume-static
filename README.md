編譯時須把路徑調整為github的子目錄  
ng serve --base-href "/my-resume/" -d "/my-resume/" -o  
ng build --prod --base-href "/my-resume/" -d "/my-resume/"  
  
因為Bulma的Grid System跟Navbar的media設定有點不同的感覺，所以我有做一點修改  
檔案：node_modules/bulma/sass/utilities/initial-variables.sass  
行號：51 $tablet: 960px + (2 * $gap) !default  
行號：53 $desktop: 960px + (2 * $gap) !default  
  
[點此觀看我的履歷](https://ao6swind.github.io/my-resume)  