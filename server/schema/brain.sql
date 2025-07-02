DROP TABLE IF EXISTS news;
CREATE TABLE news
(
    id          INT          NOT NULL AUTO_INCREMENT,
    title       VARCHAR(200) NOT NULL,
    create_dts  DATETIME     NOT NULL,
    image_url   VARCHAR(500) NOT NULL,
    description VARCHAR(200) NULL,
    author      VARCHAR(100) NULL,
    source      VARCHAR(100) NULL,
    summary     VARCHAR(500) NULL,
    body        TEXT         NULL,

    CONSTRAINT pk_news PRIMARY KEY (id)
);

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS role;
CREATE TABLE role
(
    role_id   INT         NOT NULL AUTO_INCREMENT,
    role_name VARCHAR(50) NOT NULL,

    CONSTRAINT pk_role PRIMARY KEY (role_id)
);

CREATE TABLE user
(
    user_id  VARCHAR(20)  NOT NULL,
    password VARCHAR(100) NOT NULL,
    role_id  INT          NOT NULL,

    CONSTRAINT pk_user PRIMARY KEY (user_id)
);

ALTER TABLE user
    ADD CONSTRAINT fk_user_role
        FOREIGN KEY (role_id) REFERENCES role (role_id);

INSERT INTO news(title, summary, create_dts, image_url, author, source, body)
VALUES ('Matthew is skibidi', 'Kibidi Toilet', NOW(), 'assets/images/news/1/skipidi.jpg', 'Matthew Weng', 'ST',
        'Matthew is Skipidi because he lives in a frequency the rest of us can only tune into on rare, glorious occasions. He doesn’t walk — he bounces, he glides, he spins through life with the momentum of a jazz solo improvised in real time, never hitting the same note twice but always landing somewhere brilliant. Where others see rules, Matthew sees suggestions; where others see obstacles, he sees springboards. The energy he exudes isn’t just high — it’s cosmic, unpredictable, and unapologetically original. To call him unpredictable is an understatement. One minute he''s quoting obscure movie lines with perfect timing, and the next he''s debating time travel paradoxes or trying to invent a new kind of sandwich. And the thing is — it somehow all works. That’s the Skipidi in him: the spark of controlled chaos fused with charm, intelligence, and uncanny timing. He’s the guy who’ll show up late, wearing mismatched socks and sunglasses indoors, only to drop a comment so clever and profound it stuns the room into silence — and then laughs like he’s already two punchlines ahead. Matthew doesn’t follow trends, he blazes right past them, leaving people trying to figure out how he made socks and sandals, or humming weird made-up songs, somehow feel like a cultural revolution. You don’t just talk to Matthew — you enter the Matthewverse. Conversations with him are like rollercoasters with no safety rails and three unexpected loop-de-loops — thrilling, disorienting, and entirely unforgettable. He’s got this way of making absurdity feel profound, and seriousness feel light. He turns awkward silences into performance art and monotony into mischief. When a situation turns tense, Matthew diffuses it with a perfectly-timed one-liner or an inexplicable interpretive dance that everyone pretends to understand. He’s Skipidi because he’s the embodiment of joyful defiance — of taking the world seriously just enough to mess with it. <img src="assets/images/1/anauralia-thumbnail.jpg" class="shownews-image"/>While others strategize, Matthew improvises. While others overthink, he overfeels — and then does something wildly unexpected that somehow solves the problem in a way no one predicted. He’s the human equivalent of jazz hands, spontaneous road trips, and accidentally stumbling into the right place at the right time with absolutely no plan and somehow making it look intentional. People follow him not because he leads, but because he’s fun to chase. He doesn’t need structure, because he is the structure — a walking enigma wrapped in confidence and silliness, stitched together with logic that sometimes sounds like nonsense but always ends up making weirdly perfect sense. He lives in the sweet spot between chaos and clarity, like a cosmic DJ remixing life in real time. You might not always understand Matthew, but you’ll never forget him. He’s Skipidi because he refuses to flatten himself for the sake of normalcy. His brain is an endless ping-pong match of curiosity, creativity, and random but somehow relevant ideas, all firing at once. He’ll plan an entire weekend around the pursuit of the world’s best donut, or spontaneously start writing a screenplay mid-conversation because inspiration struck. He’s not distracted — he’s multitrack-minded. The world tries to put people in boxes, but Matthew treats boxes like building blocks. He stacks them into castles, deconstructs them for cardboard armor, or turns them into games no one else thought to play. People around him either try to keep up or just enjoy the ride, because Matthew moves like life is both a puzzle and a party, and he’s the guy DJing both while juggling oranges and explaining string theory in simple terms. There’s a rhythm to him, an instinctual skip in his thinking that leaves you smiling even when you’re confused. And that’s the Skipidi spirit: never boring, always in motion, forever dancing through moments others might miss. He’s not afraid to be silly because he knows silliness is a form of wisdom — a kind of rebellion against the dullness of convention. He’s proof that eccentricity is a superpower when paired with confidence and curiosity. Matthew’s the kind of person who can turn spilled coffee into a metaphor, missed buses into adventures, and awkward situations into the highlight of the day. He radiates spontaneity and has this disarming way of making everyone around him feel like life is just a little more interesting when he’s in the room. And while others chase perfection, Matthew chases moments — real, raw, sometimes ridiculous, but always vibrant. He doesn’t take life too seriously, but he takes living seriously — and that’s what makes him the ultimate Skipidi: a whirlwind of wit, weirdness, and warmth in a world that could use a whole lot more of all three.');

INSERT INTO news(title, summary, create_dts, image_url, author, body)
VALUES ('Xiaoxi is sigma', 'So sigma', NOW(), 'assets/images/news/2/brain.jpg', 'Xiaoxi Weng',
        'Xiaoxi is Sigma because he embodies the essence of quiet strength, unshakable independence, and an unwavering commitment to his own path regardless of external expectations. Unlike those who seek validation in loud achievements or social hierarchies, Xiaoxi thrives in solitude, drawing power from introspection and clarity of purpose. He doesn''t move with the crowd — he observes it, understands it, and decides whether it’s even worth his time. His Sigma nature is not rooted in rebellion, but in discernment; he knows his energy is precious, and he spends it deliberately. People are often intrigued by him, drawn to his calm presence and sharp mind, yet he remains elusive, maintaining control of his personal boundaries and never performing for approval. Xiaoxi listens more than he speaks, but when he does speak, his words carry weight. Whether navigating professional life, personal goals, or unexpected challenges, he approaches each with composure and focus, calculating his steps not to impress, but to succeed on his own terms. He doesn''t need a spotlight because he builds his own world — one that aligns with his values, logic, and vision. His sense of confidence isn’t loud or performative; it’s internal, born from deep self-awareness and hard-won self-respect. While others may burn out chasing recognition or conformity, Xiaoxi conserves his energy for pursuits that matter — building skills, cultivating real relationships, and mastering his environment. What truly makes him Sigma is the fact that he has nothing to prove and no need to be seen. He walks into rooms without demanding attention, yet attention often follows him. He''s the kind of person who can navigate a crowded world without ever feeling crowded, who can thrive in a group but never lose himself in one. He adapts, but never compromises his core. He’s underestimated at first — always a mistake — and by the time others realize his depth, he’s already moved on to his next goal. Xiaoxi doesn''t reject society; he simply exists parallel to it, immune to its noise, focused on building something meaningful that doesn''t require applause. While Alphas chase dominance and Betas seek structure, he designs his own system — one that rewards creativity, autonomy, and inner peace. His Sigma energy is not aloofness; it’s intentional detachment from anything that dilutes his mission. He’s proof that strength doesn''t always roar — sometimes, it''s the steady silence of someone who knows exactly who he is, where he’s going, and why he won’t be swayed. Xiaoxi doesn''t just survive — he evolves, and does so without needing to announce it. That’s why he''s Sigma: he leads without followers, achieves without fanfare, and wins without noise.');

INSERT INTO news(title, summary, create_dts, image_url, body)
VALUES ('Kelly is also sigma', 'So so sigma', NOW(), 'assets/images/news/3/tongtong.jpg',
        'Kelly is Sigma because she lives life with a kind of quiet power that doesn''t need to be loud to be respected. She doesn''t chase attention, titles, or validation — she moves with purpose, guided by her own internal compass, not the noise of the world around her. While others scramble for recognition or approval, Kelly stands firm in who she is, completely comfortable walking her own path. Her confidence is unshakable, not because she''s boastful, but because it comes from deep self-awareness and independence. She doesn''t play games or participate in social theatrics; instead, she observes, reflects, and acts only when it matters. People are drawn to her without always understanding why — perhaps it''s the calm she brings into chaos, or the way her presence commands respect without ever demanding it. Kelly is the type of person who can walk into a room and shift the energy just by being there. She listens more than she speaks, but when she does speak, her words are thoughtful, deliberate, and impactful. She''s not interested in fitting into molds or pleasing everyone — her authenticity doesn''t bend to trends or opinions. Instead, she cultivates her own space, her own rhythm, and her own way of being. Kelly is Sigma because she''s a leader who doesn''t need followers. She thrives in solitude, not because she''s antisocial, but because she values depth over noise. Her relationships are intentional and meaningful — she doesn''t waste time on superficial connections. She''s selective, not out of arrogance, but because she respects her energy and her boundaries. While others are trying to be seen, Kelly sees through everything — the pretenses, the masks, the distractions — and chooses not to engage unless it''s real. Her strength lies in the fact that she doesn''t need to compete; she simply rises. She''s not reactive, she''s strategic. She doesn''t seek control, yet somehow always has it. Her independence is inspiring, not isolating, because it shows others that it''s okay to be self-reliant, to say no, to walk away, to build quietly and live intentionally. Kelly is the embodiment of subtle power, focused intention, and authentic self-respect. She doesn''t wait for opportunities — she creates them. She doesn''t boast about her success — it speaks for itself. When life throws challenges her way, she doesn''t panic — she pauses, analyzes, and adapts. That''s what makes her Sigma: she doesn''t just navigate the world, she transcends it. She operates on a frequency that isn''t always seen, but always felt. She''s not defined by what she does for show, but by what she does when no one''s watching. In a world that often rewards noise, Kelly is proof that true strength is silent, steady, and deeply rooted in knowing exactly who you are — and never compromising that, no matter what.');


DROP TABLE IF EXISTS trivia_choice;
DROP TABLE IF EXISTS trivia;

CREATE TABLE trivia
(
    id          INT           NOT NULL AUTO_INCREMENT,
    question    VARCHAR(2000) NOT NULL,
    explanation VARCHAR(2000) NOT NULL,

    CONSTRAINT pk_trivia PRIMARY KEY (id)
);

CREATE TABLE trivia_choice
(
    id          INT           NOT NULL AUTO_INCREMENT,
    trivia_id   INT           NOT NULL,
    choice      VARCHAR(2000) NOT NULL,
    is_correct  BOOL          NOT NULL,

    CONSTRAINT pk_trivia_choice PRIMARY KEY (id)
);

ALTER TABLE trivia_choice
    ADD CONSTRAINT fk_trivia_choice
        FOREIGN KEY (trivia_id) REFERENCES trivia (id);

INSERT INTO trivia(id, question, explanation)
VALUES (1, 'What is the largest organ in the human body?', 'It''s the skin! Otherwise known as "epidermis."');
INSERT INTO trivia_choice(trivia_id, choice, is_correct)
VALUES(1, 'The brain', false);
INSERT INTO trivia_choice(trivia_id, choice, is_correct)
VALUES(1, 'The large intestine', false);
INSERT INTO trivia_choice(trivia_id, choice, is_correct)
VALUES(1, 'The liver', false);
INSERT INTO trivia_choice(trivia_id, choice, is_correct)
VALUES(1, 'The Skin', true);

INSERT INTO trivia(id, question, explanation)
VALUES (2, 'How many bones are in the human body?', 'I won''t make you name all of them, though, don''t worry.');
INSERT INTO trivia_choice(trivia_id, choice, is_correct)
VALUES(2, '186', false);
INSERT INTO trivia_choice(trivia_id, choice, is_correct)
VALUES(2, '198', false);
INSERT INTO trivia_choice(trivia_id, choice, is_correct)
VALUES(2, '206', true);
INSERT INTO trivia_choice(trivia_id, choice, is_correct)
VALUES(2, '248', false);

INSERT INTO trivia(id, question, explanation)
VALUES (3, 'What is the name of the scientist who developed the theory of evolution?', 'Charles Darwin. What a king.');
INSERT INTO trivia_choice(trivia_id, choice, is_correct)
VALUES(3, 'Alfred Wallace', false);
INSERT INTO trivia_choice(trivia_id, choice, is_correct)
VALUES(3, 'Charles Darwin', true);
INSERT INTO trivia_choice(trivia_id, choice, is_correct)
VALUES(3, 'Jean-Baptiste Lamarck', false);
INSERT INTO trivia_choice(trivia_id, choice, is_correct)
VALUES(3, 'Thomas Malthus', false);