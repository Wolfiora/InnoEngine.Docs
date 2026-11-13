---
uid: api.bde901ff5e00dc691450a0bac37f3aa6725ed21d708f96d572ccfc8721abff0d
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry\u00601.DisposeExtensions(System.Collections.Generic.IEnumerable{System.Object})"
source: xml
reviewed: b4c072417b2cdd50e1e17f8c96c5cd5d38ea9f2171f467f07c915fed137f3481
title: "DisposeExtensions"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Retires distinct disposable extensions in reverse order, draining pending work before lower dependencies.

**Parameter `extensions`:** Instances whose ownership has ended; duplicate references are disposed once.

**Exception `T:System.AggregateException`:** One or more instances failed retirement after all remaining instances were attempted.

**Exception `T:Inno.Core.Execution.RetirementTimeoutException`:** An instance did not drain. The registry retains the batch and faults its shared generation gate.
