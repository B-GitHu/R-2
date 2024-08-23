<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'B_Wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'vpn;K(UWbDP-YJ{F()fzm`w|N`Msm2!MBvx3C7f]4LE3 /65v%B-1(B &3gwfh>O' );
define( 'SECURE_AUTH_KEY',  'V*F_41778} vuDl3CYX|&o2Ms|:oScH%92(pStEp!D_0AeN=Ii}>iQnd6|Jd{tu4' );
define( 'LOGGED_IN_KEY',    's(=4WhS~t.eRU$L!P3;}_]s_;n3?Ef+`zY@vk+;MPh!<F@$pk2Plof*1)$QtQKmG' );
define( 'NONCE_KEY',        ' cSBw&x@,Om!2K(4[$pkB*bEmRC6~PHUY;4BtjA61/5-v19eU6HBfRh7N7e_#O$F' );
define( 'AUTH_SALT',        'Hxt98M-aLw4rMB:1F$.)7NrV%N~kk]f*oo|Cm(tbD(B_L4lL!iDVY`aN#tI9]Bhm' );
define( 'SECURE_AUTH_SALT', 'k.A5h`Ej:L!nZU& /FGz[^ePKrnsI5(Pf2e^H,}2&?nj-3Q^Of@savv@0Ps%L#|p' );
define( 'LOGGED_IN_SALT',   '0*~B8]#w~P0C1[-Wx]^|cik9!rmC5Cr^VdkP$*Zd5JuiuO/Vb7b=!${$EXa,ucg]' );
define( 'NONCE_SALT',       '1dq/-,=#bUbyY_jcx&0Tkc[D=?T)4`z:-0JCz3|IzBUknf7^@},(!=$1L.8o_>8*' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
