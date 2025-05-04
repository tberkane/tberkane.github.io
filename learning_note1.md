Once you have trained a binary classifier model, you will want to evaluate how good it is and compare it with other models. To do that, you can compute different metrics, such as accuracy, recall, precision, and F1-score, among others.

Accuracy is nice because it is intuitively interpretable, but it does not tell us much about which of the classes is being incorrectly classified. For example, if our entire evaluation set is made up of 50 positive samples and 50 negative samples, then a model that always predicts positive and a model that always predicts negative will have the same accuracy: 0.5.

To address this, we can look at recall and precision. But first, we need to learn about confusion matrices. When running evaluation in the binary classification setting, for each sample, one of four things can be true:

- It is a positive sample and it gets classified as a positive sample (we call this a true positive, TP).
- It is a positive sample and it gets classified as a negative sample (we call this a false negative, FN).
- It is a negative sample and it gets classified as a negative sample (we call this a true negative, TN).
- It is a negative sample and it gets classified as a positive sample (we call this a false positive, FP).

By summing up the number of true positives, false negatives, true negatives, and false positives, we can get a clear idea of the instances in which the model predicts correctly and the instances in which it predicts incorrectly. These four numbers are commonly visualized in a table called a confusion matrix. In our example, the confusion matrix would be:

[Example confusion matrix]

We can now return to recall and precision, which are computed as follows:

Recall = TP / (TP + FN)
Precision = TP / (TP + FP)

By the way, accuracy = (TP + TN) / (total sample count).

Recall tells us, out of all true positives, how many we caught (i.e., the completeness of positive detection). In our example, the model that always predicts positive would have a recall of 1, and the model that always predicts negative would have a recall of 0.

Precision can be interpreted as the model's ability not to incorrectly classify negative samples as positive — that is, only classifying positive samples as positive (i.e., the trustworthiness of positive detection). In our example, the model that always predicts positive would have a precision of 0.5, and the model that always predicts negative would have an undefined precision (division by zero), which is often defined as 0.

In practice, which of these two metrics is most important depends on the specific application. For example, situations where finding all the positive samples is most important, even if some negative samples are incorrectly classified as positive, would favor looking at recall. On the other hand, situations in which we absolutely must not wrongly classify negative samples as positive, even at the cost of missing actually positive samples, would favor looking at precision.

However, it is most often the case that we care about both and want to strike a balance. Also, both recall and precision are easy to "cheat," as with a model that always predicts positive and has a recall of 1 but low precision, or a model that makes very few positive predictions and therefore has high precision but low recall.

That is why one of the most common metrics to evaluate classification models is the F1-score, which combines both and is defined as:

(2 _ precision _ recall) / (precision + recall).

Why this formula? Why not just take the average of precision and recall, for example? Actually, the F1-score is the harmonic mean of precision and recall. The harmonic mean has the property that it is sensitive to low values, meaning that if either precision or recall is low, then the F1-score will be low — as opposed to using an arithmetic mean (average). For example:

- Precision = 0.9 and recall = 0.1 → F1 = 0.18
- Precision = 0.5 and recall = 0.5 → F1 = 0.5
- Precision = 0.9 and recall = 0.9 → F1 = 0.9

So, the F1-score will be high only if both precision and recall are high.

Fun fact: it’s called the F1-score because it’s part of the F-measure family of metrics, and the “1” indicates that it balances precision and recall equally.
