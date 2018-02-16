編譯時須把路徑調整為github的子目錄  
ng serve --base-href "/my-resume-static/" -d "/my-resume-static/" -o  
ng build --prod --base-href "/my-resume-static/" -d "/my-resume-static/"  
  
因為Bulma的Grid System跟Navbar的media設定有點不同的感覺，所以我有做一點修改  
另外後來新版的Bulma字體有稍微變小一點，也有做一點調整
以上修改都在bulma-modify裡面 
  
[點此觀看我的履歷](https://ao6swind.github.io/my-resume-static)  