![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies whose name match 'Babelgum'. Retrieve only their `name` field.

<!-- Your Code Goes Here -->
db.companies.find({name :"Babelgum"},{name:1}).pretty()
{ "_id" : ObjectId("52cdef7c4bab8bd675297da0"), "name" : "Babelgum" }



### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

<!-- Your Code Goes Here -->

db.companies.find({number_of_employees : {$gt : 5000}},{name: 1 , number_of_employees : 1}).limit(20).sort({number_of_employees: 1}).pretty()
{
	"_id" : ObjectId("52cdef7c4bab8bd675297e49"),
	"name" : "Nintendo",
	"number_of_employees" : 5080
}
{
	"_id" : ObjectId("52cdef7e4bab8bd67529ba2e"),
	"name" : "Hexaware Technologies",
	"number_of_employees" : 5200
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d8e"),
	"name" : "Facebook",
	"number_of_employees" : 5299
}
{
	"_id" : ObjectId("52cdef7e4bab8bd67529a453"),
	"name" : "OpenText",
	"number_of_employees" : 5300
}
{
	"_id" : ObjectId("52cdef7d4bab8bd675298b89"),
	"name" : "LSI",
	"number_of_employees" : 5400
}
{
	"_id" : ObjectId("52cdef7e4bab8bd67529b9dd"),
	"name" : "CPM Braxis",
	"number_of_employees" : 5400
}
{
	"_id" : ObjectId("52cdef7e4bab8bd67529b691"),
	"name" : "Microchip Technologies",
	"number_of_employees" : 5500
}
{
	"_id" : ObjectId("52cdef7e4bab8bd67529a84c"),
	"name" : "Mediaset",
	"number_of_employees" : 5729
}
{
	"_id" : ObjectId("52cdef7d4bab8bd675299f38"),
	"name" : "Mindray Medical International",
	"number_of_employees" : 5763
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675298760"),
	"name" : "Baidu",
	"number_of_employees" : 6000
}
{
	"_id" : ObjectId("52cdef7d4bab8bd675298b6f"),
	"name" : "Dentsu",
	"number_of_employees" : 6000
}
{
	"_id" : ObjectId("52cdef7e4bab8bd67529aeec"),
	"name" : "Tata Communications",
	"number_of_employees" : 6000
}
{
	"_id" : ObjectId("52cdef7e4bab8bd67529bd33"),
	"name" : "Atmel",
	"number_of_employees" : 6000
}
{
	"_id" : ObjectId("52cdef7d4bab8bd6752996f7"),
	"name" : "Acxiom",
	"number_of_employees" : 6200
}
{
	"_id" : ObjectId("52cdef7d4bab8bd675299a81"),
	"name" : "Acxiom",
	"number_of_employees" : 6200
}
{
	"_id" : ObjectId("52cdef7d4bab8bd675298e43"),
	"name" : "SRA International",
	"number_of_employees" : 6400
}
{
	"_id" : ObjectId("52cdef7f4bab8bd67529bd50"),
	"name" : "Moody's",
	"number_of_employees" : 6800
}
{
	"_id" : ObjectId("52cdef7f4bab8bd67529c364"),
	"name" : "ManTech",
	"number_of_employees" : 7000
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297e5d"),
	"name" : "Adobe Systems",
	"number_of_employees" : 7173
}
{
	"_id" : ObjectId("52cdef7e4bab8bd67529ac9c"),
	"name" : "Broadcom",
	"number_of_employees" : 7400
}
> 





### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fields.

<!-- Your Code Goes Here -->


db.companies.find({$and:[{founded_year: {$gte:2000}},{founded_year: {$lte:2005}}]},{name: 1 , founded_year : 1}).pretty()
{
	"_id" : ObjectId("52cdef7c4bab8bd675297e1e"),
	"name" : "TechnologyGuide",
	"founded_year" : 2001
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d8a"),
	"name" : "Wetpaint",
	"founded_year" : 2005
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d8c"),
	"name" : "Zoho",
	"founded_year" : 2005
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d8d"),
	"name" : "Digg",
	"founded_year" : 2004
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d8e"),
	"name" : "Facebook",
	"founded_year" : 2004
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d8f"),
	"name" : "Omnidrive",
	"founded_year" : 2005
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d96"),
	"name" : "Gizmoz",
	"founded_year" : 2003
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d9a"),
	"name" : "Helio",
	"founded_year" : 2005
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297dd5"),
	"name" : "AllofMP3",
	"founded_year" : 2000
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d95"),
	"name" : "StumbleUpon",
	"founded_year" : 2002
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297da1"),
	"name" : "Plaxo",
	"founded_year" : 2002
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297da5"),
	"name" : "Technorati",
	"founded_year" : 2002
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297da7"),
	"name" : "AddThis",
	"founded_year" : 2004
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297dac"),
	"name" : "Veoh",
	"founded_year" : 2004
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297daf"),
	"name" : "Jingle Networks",
	"founded_year" : 2005
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297db2"),
	"name" : "Meetup",
	"founded_year" : 2002
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297db5"),
	"name" : "LifeLock",
	"founded_year" : 2005
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297db6"),
	"name" : "Wesabe",
	"founded_year" : 2005
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297db7"),
	"name" : "Jangl SMS",
	"founded_year" : 2005
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297db8"),
	"name" : "SmugMug",
	"founded_year" : 2002
}
Type "it" for more
> 




### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.

<!-- Your Code Goes Here -->
 db.companies.find({$and:[{"ipo.valuation_amount" :{$gte: 100000000}},{founded_year : {$lte:2010}}]},{name:1 , "ipo.valuation_amount":1})
{ "_id" : ObjectId("52cdef7c4bab8bd675297d8e"), "name" : "Facebook", "ipo" : { "valuation_amount" : NumberLong("104000000000") } }
{ "_id" : ObjectId("52cdef7c4bab8bd675297d94"), "name" : "Twitter", "ipo" : { "valuation_amount" : NumberLong("18100000000") } }
{ "_id" : ObjectId("52cdef7c4bab8bd675297de0"), "name" : "Yelp", "ipo" : { "valuation_amount" : 1300000000 } }
{ "_id" : ObjectId("52cdef7c4bab8bd675297e0c"), "name" : "LinkedIn", "ipo" : { "valuation_amount" : NumberLong("9310000000") } }
{ "_id" : ObjectId("52cdef7c4bab8bd675297e7a"), "name" : "Amazon", "ipo" : { "valuation_amount" : NumberLong("100000000000") } }
{ "_id" : ObjectId("52cdef7c4bab8bd675297e81"), "name" : "Brightcove", "ipo" : { "valuation_amount" : 290000000 } }
{ "_id" : ObjectId("52cdef7c4bab8bd675297ee5"), "name" : "KIT digital", "ipo" : { "valuation_amount" : 235000000 } }
{ "_id" : ObjectId("52cdef7c4bab8bd675297f15"), "name" : "Nielsen", "ipo" : { "valuation_amount" : 1600000000 } }
{ "_id" : ObjectId("52cdef7c4bab8bd675297f36"), "name" : "OpenTable", "ipo" : { "valuation_amount" : 1050000000 } }
{ "_id" : ObjectId("52cdef7c4bab8bd675297f42"), "name" : "ChannelAdvisor", "ipo" : { "valuation_amount" : 287000000 } }
{ "_id" : ObjectId("52cdef7c4bab8bd675297f95"), "name" : "Jive Software", "ipo" : { "valuation_amount" : 1000000000 } }
{ "_id" : ObjectId("52cdef7c4bab8bd67529800c"), "name" : "Zillow", "ipo" : { "valuation_amount" : NumberLong("2550000000") } }
{ "_id" : ObjectId("52cdef7c4bab8bd67529805d"), "name" : "Wix", "ipo" : { "valuation_amount" : 750000000 } }
{ "_id" : ObjectId("52cdef7c4bab8bd675298112"), "name" : "Shutterfly", "ipo" : { "valuation_amount" : 350000000 } }
{ "_id" : ObjectId("52cdef7c4bab8bd6752981a7"), "name" : "TripAdvisor", "ipo" : { "valuation_amount" : NumberLong("3273770000") } }
{ "_id" : ObjectId("52cdef7c4bab8bd67529823b"), "name" : "Salesforce", "ipo" : { "valuation_amount" : 110000000 } }
{ "_id" : ObjectId("52cdef7c4bab8bd6752982f6"), "name" : "HomeAway", "ipo" : { "valuation_amount" : NumberLong("3000000000") } }
{ "_id" : ObjectId("52cdef7c4bab8bd6752984e3"), "name" : "QuinStreet", "ipo" : { "valuation_amount" : 140000000 } }
{ "_id" : ObjectId("52cdef7c4bab8bd675298527"), "name" : "Rackspace", "ipo" : { "valuation_amount" : NumberLong("5440000000") } }
{ "_id" : ObjectId("52cdef7c4bab8bd67529859a"), "name" : "BMC Software", "ipo" : { "valuation_amount" : NumberLong("6000000000") } }
Type "it" for more


### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

<!-- Your Code Goes Here -->
 db.companies.find({$and:[{number_of_employees: {$lte:1000}},{founded_year :{$lte:2005}}]},{number_of_employees: 1}).limit(10)
{ "_id" : ObjectId("52cdef7c4bab8bd675297d8b"), "number_of_employees" : 600 }
{ "_id" : ObjectId("52cdef7c4bab8bd675297e1e"), "number_of_employees" : 10 }
{ "_id" : ObjectId("52cdef7c4bab8bd675297d8a"), "number_of_employees" : 47 }
{ "_id" : ObjectId("52cdef7c4bab8bd675297d8d"), "number_of_employees" : 60 }
{ "_id" : ObjectId("52cdef7c4bab8bd675297d93"), "number_of_employees" : 0 }
{ "_id" : ObjectId("52cdef7c4bab8bd675297da1"), "number_of_employees" : 50 }
{ "_id" : ObjectId("52cdef7c4bab8bd675297da5"), "number_of_employees" : 35 }
{ "_id" : ObjectId("52cdef7c4bab8bd675297da7"), "number_of_employees" : 120 }
{ "_id" : ObjectId("52cdef7c4bab8bd675297daf"), "number_of_employees" : 35 }
{ "_id" : ObjectId("52cdef7c4bab8bd675297db2"), "number_of_employees" : 75 }


### 6. All the companies that don't include the `partners` field.

<!-- Your Code Goes Here -->
db.companies.find({ "partners.partner_name" : {$exists: true}},{name : 1 , partners:1}).pretty()
{
	"_id" : ObjectId("52cdef7c4bab8bd675297dba"),
	"name" : "Google",
	"partners" : [
		{
			"partner_name" : "AngelList",
			"homepage_url" : "http://google.com",
			"link_1_url" : "https://angel.co/just-us-2-dunrs-roxy?utm_source=crunchbase&utm_medium=link&utm_content=profile&utm_term=google&utm_campaign=crunchbase",
			"link_2_url" : null,
			"link_3_url" : null,
			"link_1_name" : "AngelList Page",
			"link_2_name" : null,
			"link_3_name" : null
		}
	]
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297e39"),
	"name" : "Parakey",
	"partners" : [
		{
			"partner_name" : "AngelList",
			"homepage_url" : "http://www.valhallapartners.com",
			"link_1_url" : "https://angel.co/valhalla-partners?utm_source=crunchbase&utm_medium=link&utm_content=profile&utm_term=/financial-organization/valhalla-partners&utm_campaign=crunchbase",
			"link_2_url" : null,
			"link_3_url" : null,
			"link_1_name" : "AngelList Page",
			"link_2_name" : null,
			"link_3_name" : null
		}
	]
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297e7e"),
	"name" : "boo-box",
	"partners" : [
		{
			"partner_name" : "AngelList",
			"homepage_url" : "http://boo-box.com",
			"link_1_url" : "https://angel.co/boo-box?utm_source=crunchbase&utm_medium=link&utm_content=profile&utm_term=boo-box&utm_campaign=crunchbase",
			"link_2_url" : null,
			"link_3_url" : null,
			"link_1_name" : "AngelList Page",
			"link_2_name" : null,
			"link_3_name" : null
		}
	]
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297eb0"),
	"name" : "Echo",
	"partners" : [
		{
			"partner_name" : "AngelList",
			"homepage_url" : "http://aboutecho.com",
			"link_1_url" : "https://angel.co/echo-1?utm_source=crunchbase&utm_medium=link&utm_content=profile&utm_term=echo&utm_campaign=crunchbase",
			"link_2_url" : null,
			"link_3_url" : null,
			"link_1_name" : "AngelList Page",
			"link_2_name" : null,
			"link_3_name" : null
		}
	]
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297eb4"),
	"name" : "Pickle",
	"partners" : [
		{
			"partner_name" : "AngelList",
			"homepage_url" : "http://pickleapp.co",
			"link_1_url" : "https://angel.co/pickle-1?utm_source=crunchbase&utm_medium=link&utm_content=profile&utm_term=pickle&utm_campaign=crunchbase",
			"link_2_url" : null,
			"link_3_url" : null,
			"link_1_name" : "AngelList Page",
			"link_2_name" : null,
			"link_3_name" : null
		}
	]
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297ed3"),
	"name" : "Weebly",
	"partners" : [
		{
			"partner_name" : "AngelList",
			"homepage_url" : "http://www.weebly.com",
			"link_1_url" : "https://angel.co/weebly?utm_source=crunchbase&utm_medium=link&utm_content=profile&utm_term=weebly&utm_campaign=crunchbase",
			"link_2_url" : null,
			"link_3_url" : null,
			"link_1_name" : "AngelList Page",
			"link_2_name" : null,
			"link_3_name" : null
		}
	]
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297ed4"),
	"name" : "Yola",
	"partners" : [
		{
			"partner_name" : "AngelList",
			"homepage_url" : "http://www.yola.com",
			"link_1_url" : "https://angel.co/yola-2?utm_source=crunchbase&utm_medium=link&utm_content=profile&utm_term=yola&utm_campaign=crunchbase",
			"link_2_url" : null,
			"link_3_url" : null,
			"link_1_name" : "AngelList Page",
			"link_2_name" : null,
			"link_3_name" : null
		}
	]
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297f00"),
	"name" : "Docstoc",
	"partners" : [
		{
			"partner_name" : "AngelList",
			"homepage_url" : "http://www.octopus.org",
			"link_1_url" : "https://angel.co/octopus?utm_source=crunchbase&utm_medium=link&utm_content=profile&utm_term=/financial-organization/octopus-ventures&utm_campaign=crunchbase",
			"link_2_url" : null,
			"link_3_url" : null,
			"link_1_name" : "AngelList Page",
			"link_2_name" : null,
			"link_3_name" : null
		}
	]
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297f0c"),
	"name" : "Alibaba",
	"partners" : [
		{
			"partner_name" : "CTQuan",
			"homepage_url" : "http://www.alibaba.com",
			"link_1_url" : null,
			"link_2_url" : null,
			"link_3_url" : null,
			"link_1_name" : null,
			"link_2_name" : null,
			"link_3_name" : null
		}
	]
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297f24"),
	"name" : "TubeMogul",
	"partners" : [
		{
			"partner_name" : "AngelList",
			"homepage_url" : "http://www.tubemogul.com",
			"link_1_url" : "https://angel.co/tubemogul?utm_source=crunchbase&utm_medium=link&utm_content=profile&utm_term=tubemogul&utm_campaign=crunchbase",
			"link_2_url" : "https://angel.co/tubemogul/jobs?utc_source=crunchbase&amp;utm_campaign=crunchbase&amp;utm_content=jobs&amp;utm_medium=link&amp;utm_term=tubemogul",
			"link_3_url" : null,
			"link_1_name" : "AngelList Page",
			"link_2_name" : "Hiring: Product Manager, User Interface",
			"link_3_name" : null
		}
	]
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297fd9"),
	"name" : "Boomi",
	"partners" : [
		{
			"partner_name" : "ILVenture",
			"homepage_url" : "http://www.gizavc.com",
			"link_1_url" : "http://ilventure.co/giza",
			"link_2_url" : null,
			"link_3_url" : null,
			"link_1_name" : "IL Venture Page",
			"link_2_name" : null,
			"link_3_name" : null
		}
	]
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297fdb"),
	"name" : "Animoto",
	"partners" : [
		{
			"partner_name" : "AngelList",
			"homepage_url" : "http://animoto.com",
			"link_1_url" : "https://angel.co/animoto?utm_source=crunchbase&utm_medium=link&utm_content=profile&utm_term=animoto&utm_campaign=crunchbase",
			"link_2_url" : "https://angel.co/animoto/jobs?utc_source=crunchbase&amp;utm_campaign=crunchbase&amp;utm_content=jobs&amp;utm_medium=link&amp;utm_term=animoto",
			"link_3_url" : null,
			"link_1_name" : "AngelList Page",
			"link_2_name" : "Hiring: Mobile Developer",
			"link_3_name" : null
		}
	]
}
{
	"_id" : ObjectId("52cdef7c4bab8bd67529805a"),
	"name" : "Payoneer",
	"partners" : [
		{
			"partner_name" : "ILVenture",
			"homepage_url" : "http://www.payoneer.com",
			"link_1_url" : "http://ilventure.co/payoneer-inc",
			"link_2_url" : null,
			"link_3_url" : null,
			"link_1_name" : "IL Venture Page",
			"link_2_name" : null,
			"link_3_name" : null
		}
	]
}
{
	"_id" : ObjectId("52cdef7c4bab8bd6752980a3"),
	"name" : "StylePath",
	"partners" : [
		{
			"partner_name" : "ILVenture",
			"homepage_url" : "http://www.teuzafund.com",
			"link_1_url" : "http://ilventure.co/teuza",
			"link_2_url" : null,
			"link_3_url" : null,
			"link_1_name" : "IL Venture Page",
			"link_2_name" : null,
			"link_3_name" : null
		}
	]
}
{
	"_id" : ObjectId("52cdef7c4bab8bd6752980b3"),
	"name" : "Xconomy",
	"partners" : [
		{
			"partner_name" : "AngelList",
			"homepage_url" : "http://www.voodooventures.com",
			"link_1_url" : "https://angel.co/voodoo?utm_source=crunchbase&utm_medium=link&utm_content=profile&utm_term=/financial-organization/voodoo-ventures&utm_campaign=crunchbase",
			"link_2_url" : null,
			"link_3_url" : null,
			"link_1_name" : "AngelList Page",
			"link_2_name" : null,
			"link_3_name" : null
		}
	]
}
{
	"_id" : ObjectId("52cdef7c4bab8bd6752980be"),
	"name" : "Cyberhomes",
	"partners" : [
		{
			"partner_name" : "AngelList",
			"homepage_url" : "http://www.grotechventures.com",
			"link_1_url" : "https://angel.co/grotech-ventures?utm_source=crunchbase&utm_medium=link&utm_content=profile&utm_term=/financial-organization/grotech-ventures&utm_campaign=crunchbase",
			"link_2_url" : null,
			"link_3_url" : null,
			"link_1_name" : "AngelList Page",
			"link_2_name" : null,
			"link_3_name" : null
		}
	]
}
{
	"_id" : ObjectId("52cdef7c4bab8bd67529810d"),
	"name" : "Hark",
	"partners" : [
		{
			"partner_name" : "AngelList",
			"homepage_url" : "http://www.hark.com",
			"link_1_url" : "https://angel.co/hark?utm_source=crunchbase&utm_medium=link&utm_content=profile&utm_term=hark&utm_campaign=crunchbase",
			"link_2_url" : null,
			"link_3_url" : null,
			"link_1_name" : "AngelList Page",
			"link_2_name" : null,
			"link_3_name" : null
		}
	]
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675298119"),
	"name" : "Youku",
	"partners" : [
		{
			"partner_name" : "CTQuan",
			"homepage_url" : "http://www.youku.com",
			"link_1_url" : null,
			"link_2_url" : null,
			"link_3_url" : null,
			"link_1_name" : null,
			"link_2_name" : null,
			"link_3_name" : null
		},
		{
			"partner_name" : "CTQuan",
			"homepage_url" : "http://www.youku.com",
			"link_1_url" : null,
			"link_2_url" : null,
			"link_3_url" : null,
			"link_1_name" : null,
			"link_2_name" : null,
			"link_3_name" : null
		}
	]
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675298122"),
	"name" : "eToro",
	"partners" : [
		{
			"partner_name" : "ILVenture",
			"homepage_url" : "http://www.etoro.com",
			"link_1_url" : "http://ilventure.co/etoro",
			"link_2_url" : null,
			"link_3_url" : null,
			"link_1_name" : "IL Venture Page",
			"link_2_name" : null,
			"link_3_name" : null
		}
	]
}
{
	"_id" : ObjectId("52cdef7c4bab8bd67529814d"),
	"name" : "ClickTale",
	"partners" : [
		{
			"partner_name" : "ILVenture",
			"homepage_url" : "http://www.clicktale.com",
			"link_1_url" : "http://ilventure.co/clicktale",
			"link_2_url" : null,
			"link_3_url" : null,
			"link_1_name" : "IL Venture Page",
			"link_2_name" : null,
			"link_3_name" : null
		}
	]
}
Type "it" for more
> 


### 7. All the companies that have a null type of value on the `category_code` field.

<!-- Your Code Goes Here -->
db.companies.find({category_code: null},{name: 1, category_code : 1}).pretty()
{
	"_id" : ObjectId("52cdef7c4bab8bd675298225"),
	"name" : "Snimmer",
	"category_code" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd67529826e"),
	"name" : "Drigg",
	"category_code" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd67529827a"),
	"name" : "MMDAYS",
	"category_code" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd6752980f6"),
	"name" : "Collective",
	"category_code" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675298226"),
	"name" : "KoolIM",
	"category_code" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675298261"),
	"name" : "Level9 Media",
	"category_code" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675298262"),
	"name" : "VidKing",
	"category_code" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675298276"),
	"name" : "SpaceTime",
	"category_code" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675298279"),
	"name" : "Touch Clarity",
	"category_code" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd67529827b"),
	"name" : "Inside Group",
	"category_code" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd67529827e"),
	"name" : "Repeater Store",
	"category_code" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675298288"),
	"name" : "Tapesh",
	"category_code" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675298289"),
	"name" : "iPersians",
	"category_code" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd67529828a"),
	"name" : "NewPersia",
	"category_code" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd6752982ab"),
	"name" : "Pyra Labs",
	"category_code" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd6752982b3"),
	"name" : "Feedmap",
	"category_code" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd6752982e0"),
	"name" : "NuvoMedia",
	"category_code" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd6752982e4"),
	"name" : "Intwine",
	"category_code" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd6752982ef"),
	"name" : "The Weinstein Company",
	"category_code" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd6752982f2"),
	"name" : "ExecuNet",
	"category_code" : null
}
Type "it" for more
> 


### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

<!-- Your Code Goes Here -->
db.companies.find({$and : [ { number_of_employees : { $gte : 100}}, {number_of_employees: {$lt: 1000}}]},{ name: 1 , number_of_employees : 1}).pretty()
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d8b"),
	"name" : "AdventNet",
	"number_of_employees" : 600
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297da7"),
	"name" : "AddThis",
	"number_of_employees" : 120
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297da8"),
	"name" : "OpenX",
	"number_of_employees" : 305
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297db5"),
	"name" : "LifeLock",
	"number_of_employees" : 644
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297dbb"),
	"name" : "Jajah",
	"number_of_employees" : 110
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297dc0"),
	"name" : "Livestream",
	"number_of_employees" : 120
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297dc1"),
	"name" : "Ustream",
	"number_of_employees" : 250
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297dda"),
	"name" : "iContact",
	"number_of_employees" : 300
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297de0"),
	"name" : "Yelp",
	"number_of_employees" : 800
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297dee"),
	"name" : "Dailymotion",
	"number_of_employees" : 120
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297df0"),
	"name" : "RockYou",
	"number_of_employees" : 106
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297e09"),
	"name" : "Meebo",
	"number_of_employees" : 200
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297e0a"),
	"name" : "Eventbrite",
	"number_of_employees" : 200
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297e10"),
	"name" : "Box",
	"number_of_employees" : 950
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297e15"),
	"name" : "Conduit",
	"number_of_employees" : 215
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297e19"),
	"name" : "Redfin",
	"number_of_employees" : 100
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297e26"),
	"name" : "oDesk",
	"number_of_employees" : 120
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297e27"),
	"name" : "Simply Hired",
	"number_of_employees" : 100
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297e38"),
	"name" : "PhotoBox",
	"number_of_employees" : 600
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297e3a"),
	"name" : "Spreadshirt",
	"number_of_employees" : 230
}

### 9. Order all the companies by their IPO price in a descending order.

<!-- Your Code Goes Here -->
db.companies.find({},{"ipo.valuation_amount" : 1 , name : 1}).limit(20).sort({"ipo.valuation.amount" : -1}).pretty()
{ "_id" : ObjectId("52cdef7c4bab8bd675297d8b"), "name" : "AdventNet" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297e1e"), "name" : "TechnologyGuide" }
{ "_id" : ObjectId("52cdef7c4bab8bd675298225"), "name" : "Snimmer" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297d8a"), "name" : "Wetpaint" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297d8c"), "name" : "Zoho" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297d8d"), "name" : "Digg" }
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d8e"),
	"name" : "Facebook",
	"ipo" : {
		"valuation_amount" : NumberLong("104000000000")
	}
}
{ "_id" : ObjectId("52cdef7c4bab8bd675297d8f"), "name" : "Omnidrive" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297d90"), "name" : "Postini" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297d91"), "name" : "Geni" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297d92"), "name" : "Flektor" }
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d93"),
	"name" : "Fox Interactive Media"
}
{ "_id" : ObjectId("52cdef7c4bab8bd675297d96"), "name" : "Gizmoz" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297d9a"), "name" : "Helio" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297dd5"), "name" : "AllofMP3" }
{ "_id" : ObjectId("52cdef7c4bab8bd67529826e"), "name" : "Drigg" }
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d94"),
	"name" : "Twitter",
	"ipo" : {
		"valuation_amount" : NumberLong("18100000000")
	}
}
{ "_id" : ObjectId("52cdef7c4bab8bd675297d95"), "name" : "StumbleUpon" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297d97"), "name" : "Scribd" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297d98"), "name" : "Slacker" }
> 


### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

<!-- Your Code Goes Here -->
 db.companies.find({},{name : 1, number_of_employees : 1}).limit(10).sort({number_of_employees : -1}).pretty()
{
	"_id" : ObjectId("52cdef7d4bab8bd67529941a"),
	"name" : "Siemens",
	"number_of_employees" : 405000
}
{
	"_id" : ObjectId("52cdef7c4bab8bd67529856a"),
	"name" : "IBM",
	"number_of_employees" : 388000
}
{
	"_id" : ObjectId("52cdef7d4bab8bd675299d33"),
	"name" : "Toyota",
	"number_of_employees" : 320000
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297e89"),
	"name" : "PayPal",
	"number_of_employees" : 300000
}
{
	"_id" : ObjectId("52cdef7e4bab8bd67529b0fe"),
	"name" : "Nippon Telegraph and Telephone Corporation",
	"number_of_employees" : 227000
}
{
	"_id" : ObjectId("52cdef7d4bab8bd675298aa4"),
	"name" : "Samsung Electronics",
	"number_of_employees" : 221726
}
{
	"_id" : ObjectId("52cdef7d4bab8bd675298b99"),
	"name" : "Accenture",
	"number_of_employees" : 205000
}
{
	"_id" : ObjectId("52cdef7e4bab8bd67529a657"),
	"name" : "Tata Consultancy Services",
	"number_of_employees" : 200300
}
{
	"_id" : ObjectId("52cdef7e4bab8bd67529aa51"),
	"name" : "Flextronics International",
	"number_of_employees" : 200000
}
{
	"_id" : ObjectId("52cdef7d4bab8bd675299156"),
	"name" : "Safeway",
	"number_of_employees" : 186000
}
> 


### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

<!-- Your Code Goes Here -->

<!-- ### 12. All the companies that have been 'deadpooled' after the third year. -->

<!-- Your Code Goes Here -->

### 12. All the companies founded before 2000 that have an acquisition amount of more than 10.000.000
{ db.companies.find({founded_year : {$lt: 2000},"acquisition.price_amount" : {$gt :10000000}}).pretty()

<!-- Your Code Goes Here -->

### 13. All the companies that have been acquired after 2010, order by the acquisition amount, and retrieve only their `name` and `acquisition` field.
db.companies.find({"acquisition.acquired_year" : {$gt: 2010}}, {name: 1}).sort({"acquisition.acquired_amount": 1 }).pretty()
{ "_id" : ObjectId("52cdef7c4bab8bd675297d8a"), "name" : "Wetpaint" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297d8d"), "name" : "Digg" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297d91"), "name" : "Geni" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297dab"), "name" : "Kyte" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297daf"), "name" : "Jingle Networks" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297dbf"), "name" : "blogTV" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297dc7"), "name" : "delicious" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297dcb"), "name" : "Revision3" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297dda"), "name" : "iContact" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297ddd"), "name" : "Mashery" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297dee"), "name" : "Dailymotion" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297def"), "name" : "KickApps" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297df3"), "name" : "Instructables" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297df4"), "name" : "Netvibes" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297e02"), "name" : "Dogster" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297e06"), "name" : "adBrite" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297e09"), "name" : "Meebo" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297e1d"), "name" : "Seesmic" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297e20"), "name" : "Zvents" }
{ "_id" : ObjectId("52cdef7c4bab8bd675297e25"), "name" : "Oodle" }

<!-- Your Code Goes Here -->

### 14. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.

db.companies.find({founded_year: {$exists :true }},{name:1,founded_year :1 }).sort({"founded_year": 1}).limit(10).pretty()
{
	"_id" : ObjectId("52cdef7c4bab8bd675298225"),
	"name" : "Snimmer",
	"founded_year" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d92"),
	"name" : "Flektor",
	"founded_year" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd67529826e"),
	"name" : "Drigg",
	"founded_year" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297d99"),
	"name" : "Lala",
	"founded_year" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297da6"),
	"name" : "SpinVox",
	"founded_year" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd67529827a"),
	"name" : "MMDAYS",
	"founded_year" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297dad"),
	"name" : "Gannett",
	"founded_year" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297db0"),
	"name" : "Info",
	"founded_year" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297db1"),
	"name" : "JotSpot",
	"founded_year" : null
}
{
	"_id" : ObjectId("52cdef7c4bab8bd675297db3"),
	"name" : "Mercora",
	"founded_year" : null
}
> 






<!-- Your Code Goes Here -->

### 15. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `acquisition price` in a descending order. Limit the search to 10 documents.



}
> db.companies.find({founded_day: {$lte:7}}).sort({"acquisition.acquired_amount": -1}).limit(2).pretty()


<!-- Your Code Goes Here -->

### 16. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascending order.
db.companies.find({category_code: "web" , number_of_employees: {$gte: 4000}}).pretty().sort({number_of_employees: 1})

<!-- Your Code Goes Here -->

### 17. All the companies whose acquisition amount is more than 10.000.000, and currency is 'EUR'.

<!-- Your Code Goes Here -->
db.companies.find({"acquisition.price_amount": {$gt: 10000000}, "acquisition.price_currency_code": "EUR"}, {name:1}).pretty()

### 18. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.
db.companies.find({"acquisition.acquired_month": {$lte: 3}}, {name:1, acquisition:1 }).limit(5).pretty()

<!-- Your Code Goes Here -->

### 19. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.
db.companies.find({founded_year: {$gte:200}, founded_year: {$lte:2010}, "acquisition.acquired_year": {$gt: 2011}}).pretty()

<!-- Your Code Goes Here -->
