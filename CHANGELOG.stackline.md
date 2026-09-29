# Stackline changelog

## 1.0.0

- Adopt maintenance from `source-map-js@1.2.1` with preserved source history and license.
- Reject invalid indexed-map offsets and mappings outside the generated content before SourceNode line padding (upstream reports 76/77). The regression preserves valid indexed-map text.
- Add tested, reproducible artifact publication with npm provenance and immutable release evidence.
