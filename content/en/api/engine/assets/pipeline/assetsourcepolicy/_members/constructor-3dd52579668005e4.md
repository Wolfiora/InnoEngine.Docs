---
uid: api.3dd52579668005e4aa8ef78aa38bb3b86a7267716f89131532ed055c9e185e5c
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSourcePolicy.#ctor(System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String})"
source: xml
reviewed: 8cec845db0ee6d88f6af6c61558a0108f68e43f14b95a7a52c8415c56abc59ca
title: "Constructor"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Creates a source policy with additional ignored names and affixes.

**Parameter `ignoredFileNames`:** Additional case-insensitive file names excluded from every source mount.

**Parameter `ignoredDirectoryNames`:** Additional case-insensitive directory names excluded with their descendants.

**Parameter `ignoredPrefixes`:** Additional file-name prefixes treated as transient authoring noise.

**Parameter `ignoredSuffixes`:** Additional file-name suffixes treated as transient authoring noise.
