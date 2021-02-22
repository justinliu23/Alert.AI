import tensorflow as tf
import os
import base64

filename = "saved_model.pb"
labels_filename = "labels.txt"


def wrapper(encoded_string, filename):
  with open(filename, "wb") as f:
    f.write(base64.b64decode(encoded_string))
    
    img = plt.imread(filename)
    predictor = FER(mtcnn=True)
    print(predictor.detect_emotions(img))
    plt.imshow(img)
    
    emotion, score = predictor.top_emotion(img)
  f.close()
  return (emotion, score)


  