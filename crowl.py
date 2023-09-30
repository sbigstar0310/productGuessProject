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

def getTodayDate(userDate = ""):
    if userDate == "":
        return datetime.datetime.now().strftime("%Y%m%d")
    else:
        return userDate
    
def getRequestOrError(url):
    request = requests.get(url)
    request.raise_for_status()
    return request

def getProductNamePriceImagesrc(soup):
    name = getProductName(soup)
    price = getProductPrice(soup)
    imageSrc = getProductImageSrc(soup)
    return (name, price, imageSrc)

def getProductName(soup):
    name = soup.find("div", {"class": "imageProduct_title__Wdeb1"}).text
    return name

def getProductPrice(soup):
    price = soup.find("div", {"class": "imageProduct_price__W6pU1"}).next_element.text.replace(",","")
    return price

def getProductImageSrc(soup):
    imageSrc = soup.find('div', {"class":"imageProduct_thumbnail__Szi5F"}).next_element.next_sibling.next_element.next_sibling.next_element['src']
    return imageSrc

userDate = input("클롤링 하려는 날짜를 입력: ")
todayDate = getTodayDate(userDate)

navershopDayBestUrl = (
    "https://search.shopping.naver.com/best/today?rankedDate=" + todayDate
)
markup = getRequestOrError(navershopDayBestUrl)
soup = BeautifulSoup(markup.text, "lxml")

#name, price, imagesrc 크롤링
name, price, imageSrc = getProductNamePriceImagesrc(soup)

file_path = "itemsNamePriceImage.json"

with open(file_path, 'rb') as file:
    file.readline()
    data = json.load(file)

itemIndex = len(data["itemList"]) + 1
image = str(itemIndex) + ".jpg"
newListItem = json.loads(str(
{
    "name" : name,
    "price" : price,
    "image" : image
}
).replace("'","\""))

#print(newListItem)
data["itemList"].append(newListItem)

# json 데이터 저장
with open(file_path, 'w', encoding='utf-8') as file:
  file.write("items = \n")
  json.dump(data, file, indent="\t", ensure_ascii=False)

# 이미지 저장
urllib.request.urlretrieve(imageSrc, "images/" + str(itemIndex) + ".jpg")