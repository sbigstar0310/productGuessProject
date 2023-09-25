# 1. 상품 사이트를 크롤링 하여 다음의 정보를 저장해야 함.
# 2. 상품의 name, price, image의 문자열을 구하여 itemsNamePriceImage.js에 json 형식으로
#    새로운 파일을 추가.
#    예) name: "더 좋은 접의식 의자[특가세일]", price: "34000", image="13.jpg"
# 3. 해당 image를 다운하여 images/ 파일에 저장해야 함. 이때 저장하는 이미지 이름은
#    "(해당 숫자).jpg" 형식으로 저장.
# 4. 이때 해당 숫자는 itemsNamePriceImage.js에 저장된 index 번호를 의미 함.

import datetime
import requests
import urllib
import json
from bs4 import BeautifulSoup

def getTodayDate():
    return datetime.datetime.now().strftime("%Y%m%d")

todayDate = getTodayDate()
navershopDayBestUrl = (
    "https://search.shopping.naver.com/best/today?rankedDate=" + todayDate
)
markup = requests.get(navershopDayBestUrl)
markup.raise_for_status()
soup = BeautifulSoup(markup.text, "lxml")

#name과 price 크롤링 및 자료변환 성공.
name = soup.find("div", {"class": "imageProduct_title__Wdeb1"})
price = soup.find("div", {"class": "imageProduct_price__W6pU1"}).next_element.text


# 이미지 크롤링 및 저장 구현 성공.
# image_src = soup.find('div', {"class":"imageProduct_thumbnail__Szi5F"}).next_element.nextSibling.next_element.next_sibling.next_element['src']
# urllib.request.urlretrieve(image_src, "images/" + imageIndex + ".jpg")

#Todo: 현재 데이터가 json형식의 js파일로 저장되어 있어서
#      해당 데이터를 json형식의 json파일로 저장해야 함.
