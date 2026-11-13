---
uid: api.bde901ff5e00dc691450a0bac37f3aa6725ed21d708f96d572ccfc8721abff0d
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry\u00601.DisposeExtensions(System.Collections.Generic.IEnumerable{System.Object})"
source: xml
reviewed: d3ed0802204630b698b81e7368ddc5011ff1e395c8763ca2846e4880f2a27c02
title: "DisposeExtensions"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Retires distinct disposable extensions in reverse order, draining pending work before lower dependencies.

**Parameter `extensions`:** Instances whose ownership has ended; duplicate references are disposed once.

**Exception `T:System.AggregateException`:** One or more instances failed retirement after all remaining instances were attempted.

**Exception `T:Inno.Core.Execution.RetirementTimeoutException`:** An instance did not drain. The registry retains the batch and faults its shared generation gate.
