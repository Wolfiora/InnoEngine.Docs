---
uid: api.4647f1771d645ec6e8b738ffc03c19ed09c7a8096b84f998333cd23f7cae5382
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.#ctor(System.String,System.String)"
source: xml
reviewed: 43c2c85aaf044ec4ceb05c5c640c2c3cff655029d2d3e542d25ff42fefc526b9
title: "Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Creates a build context without consulting the tool assembly's checkout.

**Parameter `engineRoot`:** The checkout containing InnoEngine.sln and the native source tree; aliases resolve to one physical owner.

**Parameter `configuration`:** The normalized debug or release configuration.

**Exception `T:System.ArgumentException`:** The root is empty or the configuration is unsupported.

**Exception `T:System.IO.DirectoryNotFoundException`:** The selected checkout has no repository marker.

**Exception `T:System.IO.IOException`:** A checkout alias cannot be resolved to a physical owner.
