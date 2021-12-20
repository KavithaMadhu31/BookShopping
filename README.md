# Book Shopping : Sample application

This Book Shopping app allows you to see lot of books list with title, author and date. If you click on the particular item in list, 
then you will be able to see the alert. In that alert you will be able to see title and author.

Please go ahead and play around  :)

## Covered :

  - Fetches list of books from API (https://hn.algolia.com/api/v1/search_by_date?tags=story&page=1
) and displays a list.
  - Show Item list	(title, author, date)
  - When press item, displayed individual item  (title & author)
  - Pagination added every 3 second
  - pull to refresh to reload items
  - Project working on both Android and iOS
  - Project running on latest RN 0.66.4.
  - Search option available to filter item based on title or author, if matches
  - Filter items in ASC and desc order.

## Grading criteria followed:

  - **Architecture and approach** - (Using **Container and View pattern** for design patten and proper folder structure Architecture approach)
  - **Execution** - App runs successfully in both Android and iOS
  - **Code readability and style** - Written clean code and very convenient to read. Maintained proper comments and kept style files wisely. (Tried to use all latest methods)

## How to setup code :

- Step 1 : 	download code from repo

- Step 2 : 	do **npm install** or **yarn install** ( if you have configured **yarn** in your project )

  ### If you want to run in iOS :-

      -  pod install ( all of your packages to be installed in your Pod file )

      -  yarn run ios or react-native run-ios ( app will run in your simulator or connected iOS device )
      
      
  ### If you want to run in Android :-

      -  open your android studio and make sure your gradle getting success ( all of your packages to be synced in your gradle )

      -  yarn run ios or react-native run-android ( app will run in your emulator or connected Android device )

## Packages used : (Technologies)

  Project is created with:
  
  - react (17.0.2)
  - react-native (0.66.4)

      
## Happy coding .....
