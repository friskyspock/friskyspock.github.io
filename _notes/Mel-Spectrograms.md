---
---

Mel-Scale
$$m = 2595\times \log(1+\frac{f}{500})$$
$$f = 700(10^{m/2595}-1)$$
Recipe to extract Mel Spectrogram
1. Extract STFT (Short Time Fourier Spectrogram)
2. Convert amplitude to DBs
3. Convert frequencies to Mel scale
	1. Choose number of mel bands
	2. Construct mel filter banks
	3. Apply mel filter banks to spectrogram



```python
waveform, sample_rate = torchaudio.load("test.wav", normalize=True)
transform = transforms.MelSpectrogram(sample_rate)
mel_specgram = transform(waveform)  # (channel, n_mels, time)
```