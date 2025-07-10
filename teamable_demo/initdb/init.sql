-- Create a schema named 'profile'
CREATE SCHEMA IF NOT EXISTS profile;

-- Create a table to store personal/professional info
CREATE TABLE profile.user_info (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    position TEXT,
    location TEXT,
    skills TEXT
);

-- Insert Ivy Li's information
INSERT INTO profile.user_info (name, email, position, location, skills)
VALUES (
    'Ivy Li',
    'xiangivyli@gmail.com',
    'Data Engineer with full stack experience',
    'Bristol, UK',
    'Problem Solving'
);
