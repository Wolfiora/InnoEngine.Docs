---
uid: api.7471d97183f10acd70b38505759f31ffa5fbb05ff84e885157fd47b09d9233e4
symbol: "engine:Inno.Runtime:M:Inno.Runtime.RuntimeSubsystemPipeline.GetRequiredSubsystem\u0060\u00601"
source: xml
reviewed: 4d10ac618de9f1b8b7cc3b335dfa44c9c674f61d3f93d83b0c393256160d5ef9
title: "GetRequiredSubsystem"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Resolves the unique active subsystem that implements the requested contract.

**Type parameter `TFeature`:** The subsystem contract or concrete subsystem type required by the composition root.

**Returns:** The unique compatible subsystem owned by this pipeline.

**Exception `T:System.InvalidOperationException`:** Thrown when no compatible subsystem exists or more than one compatible subsystem is active.

**Exception `T:System.ObjectDisposedException`:** Thrown after this pipeline has been disposed.
