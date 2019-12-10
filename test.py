from textgenrnn import textgenrnn
import os

textgen = textgenrnn()
textgen.train_from_file('js-out/gdqtext-8000length.txt', num_epochs=10)
textgen.generate_to_file('py-out/donations4.txt', n=20, temperature=0.5)
