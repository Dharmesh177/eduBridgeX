!pip install transformers[sentencepiece]

file = open("sampleText.txt", "r")
FileContent = file.read().strip()
FileContent.replace('\n', '')

from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

checkpoint = "sshleifer/distilbart-cnn-12-6"

tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = AutoModelForSeq2SeqLM.from_pretrained(checkpoint)

import nltk
nltk.download('punkt')
sentences = nltk.tokenize.sent_tokenize(FileContent)

length = 0
chunk = ""
chunks = []
count = -1
for sentence in sentences:
  count += 1
  combined_length = len(tokenizer.tokenize(sentence)) + length 

  if combined_length  <= tokenizer.max_len_single_sentence: 
    chunk += sentence + " " 
    length = combined_length 

    if count == len(sentences) - 1:
      chunks.append(chunk.strip()) 
    
  else: 
    chunks.append(chunk.strip()) 
    
    # reset 
    length = 0 
    chunk = ""

    # for overflow
    chunk += sentence + " "
    length = len(tokenizer.tokenize(sentence))
len(chunks)


# giving input the model
inputs = [tokenizer(chunk, return_tensors="pt") for chunk in chunks]

for input in inputs:
  output = model.generate(**input)
  print(tokenizer.decode(*output, skip_special_tokens=True))