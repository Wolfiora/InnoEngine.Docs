---
uid: api.12955e947c2c70b42676353a6a093e6a37c44ff93e369bb819083b52bd4339f2
symbol: "engine:Inno.Player.Runtime:M:Inno.Player.Runtime.PlayerCommandLineOptions.Parse(System.String[])"
source: xml
reviewed: ba5eb55b9fae8ae78469ad9e5183cb462f48c182288196765901129a4b3aa3f0
title: "PlayerCommandLineOptions.Parse"
kind: api
owners: [Inno.Player.Runtime]
apiSurface: source-clr
---

Parses the shared Player command line before creating any native resource.

**Parameter `arguments`:** Pairs of supported option names and values.

**Returns:** A complete immutable command configuration.

**Exception `T:System.ArgumentException`:** An option is missing, repeated or invalid.
