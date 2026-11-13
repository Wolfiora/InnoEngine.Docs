---
uid: api.3f6605b90d38738d0ebe9ededecab1f8794836f3b39525038ce39175372cd907
symbol: "engine:Inno.Engine.Default:M:Inno.Engine.Default.DefaultEngine.CreateSessionSubsystems(Inno.Engine.Default.EngineSessionComposition)"
source: xml
reviewed: 17ce5cf3d010754b3c14de532f84599229cf4092623345f7a9451f9df7a9b672
title: "CreateSessionSubsystems"
kind: api
owners: [Inno.Engine.Default]
apiSurface: source-clr
---

Creates the complete default session factory set from local subsystem declarations.

**Parameter `context`:** The strongly typed composition inputs borrowed during factory creation.

**Returns:** A frozen deterministic factory list; the receiving RuntimeSession owns the created subsystems.
