# 1. 상품 사이트를 크롤링 하여 다음의 정보를 저장해야 함.
# 2. 상품의 name, price, image의 문자열을 구하여 itemsNamePriceImage.js에 json 형식으로
#    새로운 파일을 추가.
#    예) name: "더 좋은 접의식 의자[특가세일]", price: "34000", image="13.jpg"
# 3. 해당 image를 다운하여 images/ 파일에 저장해야 함. 이때 저장하는 이미지 이름은
#    "(해당 숫자).jpg" 형식으로 저장.

import requests
from bs4 import BeautifulSoup

todayDate = str(20230924)
navershopDayBestUrl = (
    "https://search.shopping.naver.com/best/today?rankedDate=" + todayDate
)
markup = requests.get(navershopDayBestUrl)
markup.raise_for_status()
soup = BeautifulSoup(markup.text, "lxml")
name = soup.find("div", {"class": "imageProduct_title__Wdeb1"})
price = soup.find("div", {"class": "imageProduct_price__W6pU1"})
print(price)
