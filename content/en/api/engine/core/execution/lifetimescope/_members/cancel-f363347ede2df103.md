---
uid: api.f363347ede2df103470acaa85ae3e5e55d6e1fb0bf7cda2c83b7f713ed89c772
symbol: "engine:Inno.Core.Execution:M:Inno.Core.Execution.LifetimeScope.Cancel"
source: xml
reviewed: 0a15ff08cbeefb5268ccf465d5e13e1fb142ca4d6122132cfa5d885d1df909b8
title: "Cancel"
kind: api
owners: [Inno.Core.Execution]
apiSurface: source-clr
---

Stops new registrations and invokes cancellation callbacks on the calling thread.

## Remarks

Callbacks must return promptly. Dependent resources remain owned while cancellation callbacks execute, including when another thread attempts disposal. A callback reporting pending work permanently blocks release.

**Exception `T:System.AggregateException`:** One or more cancellation callbacks fail.
