
 export class Entry
{
     api_version
     authpn
     authpt
     format
     region
     device_id
     device_category
     device_model
     device_type
     device_manufacturer
     HKS
     quantity
     order_way
     order_id
     level_id
     from
     node_id
}

 export class EncoderTecnology
{
     id
     desc
}

 export class RecorderTechnology
{
     id
     desc
}

 export class Group
{
     id
     title
     title_episode
     title_uri
     title_original
     description
     description_large
     image_large
     image_medium
     image_small
     image_still
     image_background
     url_imagen_t1
     url_imagen_t2
     image_base_horizontal
     image_base_vertical
     image_base_square
     image_clean_horizontal
     image_clean_vertical
     image_clean_square
     image_sprites
     image_frames
     duration
     date
     year
     preview
     season_number
     episode_number
     format_types
     live_enabled
     live_type
     live_ref
     timeshift
     votes_average
     rating_code
     proveedor_name
     proveedor_code
     encoder_tecnology = new EncoderTecnology();
     recorder_technology = new RecorderTechnology();
     resource_name
}

 export class Response
{
     groups = new Array();
     total
}

 export class ResponseApi
{
     entry = new Entry()
     response = new Response();
     status
     msg
}