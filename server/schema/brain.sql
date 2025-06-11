CREATE TABLE news
(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    summary VARCHAR(500) NULL,
    body VARCHAR(4000) NULL,

    CONSTRAINT pk_news PRIMARY KEY (id)
);

CREATE TABLE user
(
    user_id VARCHAR(20) NOT NULL,
    password VARCHAR(100) NOT NULL,
	role_id INT         NOT NULL,
    
    CONSTRAINT  pk_user PRIMARY KEY (user_id)
);

CREATE TABLE role
(
	role_id INT NOT NULL AUTO_INCREMENT,
	role_name VARCHAR(50) NOT NULL,
	
	CONSTRAINT pk_role PRIMARY KEY (role_id)
);