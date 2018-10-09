# SpringAngularMySQLDemo_Angular  

**This is a part of another project, and is only front end part, for server project, go to *https://github.com/honghu215/SpringAngularMySQLDemo_RestMySQL.git***

#### Periodically update column of database  

* Create Event Scheduler  

    ```MySQL
     CREATE EVENT updatePrice
        ON SCHEDULE  
            EVERY 5 SECOND  
                DO
                    UPDATE stock
                    SET stock_price = round(stock_price + (-1  +  2 * rand() * 10), 3);
    ```

* Turn On/Off Event Scheduler

    ```MySQL
    SET GLOBAL EVENT_SCHEDULER = ON;
    SET GLOBAL EVENT_SCHEDULER = OFF;
    ```  

* Delete event

    ```MySQL
    DELETE EVENT updatePrice
    ```
