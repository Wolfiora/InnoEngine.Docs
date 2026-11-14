---
uid: api.17706db679a0e0650360750f8a1e34a7eff434bf03d725801771651dc06715bc
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetDatabase.Dispose"
source: xml
reviewed: 11c520384cb53b307d836279d978953ab597bbdfbca285b56949bfbfd13da783
title: "AssetDatabase.Dispose"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Stops publication and releases canonical assets before dependency edges and the payload read gate.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** An unload hook still owns active work. Retain this database and retry at the session retirement safe point.

**Exception `T:System.AggregateException`:** Completed releases failed after all quiescent resources were attempted.
