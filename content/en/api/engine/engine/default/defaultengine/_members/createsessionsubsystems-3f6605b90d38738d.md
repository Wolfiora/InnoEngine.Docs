---
uid: api.3f6605b90d38738d0ebe9ededecab1f8794836f3b39525038ce39175372cd907
symbol: "engine:Inno.Engine.Default:M:Inno.Engine.Default.DefaultEngine.CreateSessionSubsystems(Inno.Engine.Default.EngineSessionComposition)"
source: xml
reviewed: dacb0820a3c9bda6ebaef1c337215ed3f4f3e9113b5b2122fb409dbf6eefd443
title: "CreateSessionSubsystems"
kind: api
owners: [Inno.Engine.Default]
apiSurface: source-clr
---

Creates the complete default session factory set from local subsystem declarations.

**Parameter `context`:** The strongly typed composition inputs borrowed during factory creation.

**Returns:** A frozen deterministic factory list; the receiving RuntimeSession owns the created subsystems.
