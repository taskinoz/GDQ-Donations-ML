from textgenrnn import textgenrnn
import os

# num_epochs - Time training on data
# temperature - Confidence in its generated text
# n - Number of times to generate
# interactive - allows you to train the model by selecting the words
# top_n - Top n choices used by interactive mode
# weights_path - Specify weights path

textgen = textgenrnn(weights_path='textgenrnn_weights.hdf5')
textgen.train_from_file('scrapedv3.txt', num_epochs=10)
textgen.generate_to_file('py-out/scrapedPyv3.txt', n=1000, temperature=0.5)
