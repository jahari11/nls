const products = [
    {
        id:1,
        name: '12 Undercover "Fuck the Past" Trench',
        description: 'This trench, fish tail style jacket from S/S 2012 "Open Strings" collection, is made of a lightweight dark gray cotton. Additionally, the jacket features a print back graphic in white as well as mismatched buttons throughout, 3 pockets, and waist drawstrings.',
        condition_description: 'Fair/Good Condition. Sun fading/discoloring throughout, light wear Shoulder width: 17.5in Pit to pit: 20in Sleeve from pit: 19.5in Length: 41.5in',
        price: 250.00,
        image: 'https://assets.bigcartel.com/product_images/374366143/PhotoRoom_002_20231215_090839.png?auto=format&fit=max&w=1500',
        brand: 'Supply'
    },
    {
        id:2,
        name: 'Vivienne Westwood Double Layer Gloves',
        description: 'One Size fit. Best for female or slim hands These finger-less mittens feature a double layered design. The 1st layer being a fitted heather red mitten with a 2nd baby blue layer which goes over top. The exterior blue layer features embroidered VW orb logos and controlled slits, reminiscent of rips, which expose the red base underneath.',
        condition_description: 'Great Condition, minor general wear.Total length: ~7in',
        price: 130.00,
        image: 'https://assets.bigcartel.com/product_images/372674209/PhotoRoom_004_20231121_100514.png?auto=format&fit=max&w=1500',
        brand: 'Supply'
    },
    {
        id:3,
        name: '13 PPFM Fuzzy Fleece Hoodie',
        description: 'Tagged size L. Fits M, see flat measurements.This light brown top from 2013 is made of a super soft, fuzzy polyester fleece. It features 2 side pockets and metal buttons, likely copper.',
        condition_description: 'Excellent Condition. minor general wear Shoulder width: 18in Pit to pit: 20.5in Sleeve from pit: 19.5in Length: 27.5in',
        price: 130.00,
        image: 'https://assets.bigcartel.com/product_images/377699713/PhotoRoom_001_20240214_105006.png?auto=format&fit=max&w=1500',
        brand: 'Supply'
    },
    {
        id:4,
        name: '05 PPFM Fur Collar M-65-M',
        description: 'Tagged size M. Fits S-slim M, see flat measurements. This M- 65 style jacket from 2005 is made of a black cotton twill and features a removable thick coyote fur collar and a removable fleece vest lining. Additionally, the jacket features a nylon packable hood, 4 front pockets, as well as fleece lined cuffs.',
        condition_description: 'Excellent Condition. minor general wear Shoulder width: 18in Pit to pit: 20.5in Sleeve from pit: 17.5in Length: 27in',
        price: 140.00,
        image: 'https://assets.bigcartel.com/product_images/377643685/PhotoRoom_003_20240213_105630.png?auto=format&fit=max&w=1500',
        brand: 'Supply'
    },
    {
        id:5,
        name: '05 Undercover “Arts & Crafts” Hybrid Puffer Jacket-2',
        description: 'Tagged size 2/M. Fits M/L, see flat measurements. This beautiful jacket is from the A/W 2005 “Arts & Crafts” collection. It features a unique "hybrid" construction joining a bright orange puffer vest with plaid flannel sleeves by using navy sweatshirt ribbing with some exposed raw edges. Additionally, the sleeves are lined with quilted polyester & the vest portion with down feathers.',
        condition_description: 'Fair Condition. General wear throughout, damage near wrists, some interior stains Shoulder width: 19.5in Pit to pit: ~23.5in Sleeve from pit: ~20.5in Length: 26.25in',
        price: 210.00,
        image: 'https://assets.bigcartel.com/product_images/377703595/PhotoRoom_002_20240213_122152.png?auto=format&fit=max&w=1500',
        brand: 'Supply'
    },
    {
        id:6,
        name: 'One Off Stamp Tee Brown (XL)',
        description: 'Fits XL',
        condition_description: '- Stamped with waterproof ink - 23 25 x 30in - Vintage Single stitch blank, pinholes throughout',
        price: 20.00,
        image: 'https://assets.bigcartel.com/product_images/362784166/IMG_6882.jpg?auto=format&fit=max&w=1500',
        brand: 'Neverland'
    },
    {
        id:7,
        name: 'One Off Patch Vest (40R)',
        description: 'Tagged 40R',
        condition_description: '- Military issue jacket liner - 5 Added Vintage & Neverland Patches - 23 x 23.5in',
        price: 35.00,
        image: 'https://assets.bigcartel.com/product_images/3b07cc21-f504-436f-8d04-68a7ced64993/one-off-patch-vest-40r.jpg?auto=format&fit=max&w=1500',
        brand: 'Neverland'
    },
    {
        id:8,
        name: 'One Off Patch Vest (40R)',
        description: '11.8 oz. 100% acrylic jersey knit with Pilbloc™ anti-pill performance - Patch on the front left chest, - Pinched spine down the back',
        condition_description: 'S: 20.5in x 27.5in M: 21in x 28.5in L: 24in x 29.5in XL: 26in x 30.5in',
        price: 45.00,
        image: 'https://assets.bigcartel.com/product_images/236219903/GREEEEEEEEENNNNNNN.png?auto=format&fit=max&w=1500',
        brand: 'Neverland'
    },
    {
        id:9,
        name: 'Garment Dyed Tee V1',
        description: '100% organic cotton, garment dyed to achieve a softer, broken-in feel and look. The special dye process results in a washed black color that has subtle variations in shade, color, and weathering, making every piece unique!',
        condition_description: 'Pit to Pit x Length: S- 19.5 x 28in M- 20.5 x 28in L- 22 x 28in XL- 23 x 28in',
        price: 40.00,
        image: 'https://assets.bigcartel.com/product_images/322116891/A03F461C-538C-4D3B-8335-9C531B5CC343.jpeg?auto=format&fit=max&w=1500',
        brand: 'Neverland'
    },
    {
        id:10,
        name: 'Lounge Pants V2',
        description: 'Lightweight 52% Cotton, 45% Polyester, 3% Spandex blend with 2 front pockets, 1 rear, and 1 side cargo. Gray contrast stitching throughout as well as split outside hems and elastic waist with drawstrings.',
        condition_description: 'S: 28-30 M: 30-32 L: 32-34',
        price: 70.00,
        image: 'https://assets.bigcartel.com/product_images/322120878/0783010B-CFBC-4676-BCC3-C2E6A8898D86.jpeg?auto=format&fit=max&w=1500',
        brand: 'Neverland'
    },
]

export default products;