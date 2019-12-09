from textgenrnn import textgenrnn
import os

textgen = textgenrnn()
textgen.train_from_file('gdqtext-3000length.txt', num_epochs=10)
textgen.generate_to_file('donations3.txt', n=20, temperature=0.5)
