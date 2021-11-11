function nearestSq(n){
    let i,j;
    for(i=j=n;Math.sqrt(i)%1!=0&&Math.sqrt(j)%1!=0;i++,j--);
      return Math.sqrt(i)%1==0?i:j
}
