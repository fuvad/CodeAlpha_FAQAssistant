import re
import nltk

from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer

nltk.download("punkt")

stemmer = PorterStemmer()

def preprocess(text):
    text = text.lower()
    
    text = re.sub(
        r"[^a-zA-Z ]",
        "",
        text
    )
    
    tokens = word_tokenize(text)
    
    stemmed = [stemmer.stem(t) for t in tokens]
    
    cleaned = " ".join(stemmed)
    
    return cleaned
