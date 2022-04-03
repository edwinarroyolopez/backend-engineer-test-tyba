create schema backendengineertyba;

create sequence backendengineertyba.user_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;


create table backendengineertyba.user
(
   id   bigint default nextval('backendengineertyba.user_id_seq'::regclass) not null
        constraint user_id_pkey
            primary key,
    name text,
    phone text,
    email text,
    password text,
    address text,
    city text,
    last_session_operation text,
    created_at          timestamp default now(),
    updated_at          timestamp default now()
);

-- SELECT * FROM backendengineertyba.user

create sequence backendengineertyba.log_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;


create table backendengineertyba.log
(
   id   bigint default nextval('backendengineertyba.log_id_seq'::regclass) not null
        constraint log_id_pkey
            primary key,
    data json DEFAULT '{}'::jsonb,
    type text,
    user_id bigint,
    created_at          timestamp default now()
);


-- SELECT * FROM backendengineertyba.log